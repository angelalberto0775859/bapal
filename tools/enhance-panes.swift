import AppKit
import CoreImage
import CoreImage.CIFilterBuiltins
import Vision
import Foundation
import UniformTypeIdentifiers

let args = CommandLine.arguments
guard args.count >= 3 else {
  fputs("Usage: swift tools/enhance-panes.swift <input-dir> <output-dir> [bg-image-path]\n", stderr)
  exit(64)
}

let inputDir = URL(fileURLWithPath: args[1], isDirectory: true)
let outputDir = URL(fileURLWithPath: args[2], isDirectory: true)
try FileManager.default.createDirectory(at: outputDir, withIntermediateDirectories: true)

var bgCGImage: CGImage? = nil
if args.count >= 4 {
  let bgPath = args[3]
  let bgURL = URL(fileURLWithPath: bgPath)
  if let nsBgImage = NSImage(contentsOf: bgURL) {
    var bgRect = CGRect(origin: .zero, size: nsBgImage.size)
    bgCGImage = nsBgImage.cgImage(forProposedRect: &bgRect, context: nil, hints: nil)
  }
} else {
  // Try default relative path
  let bgURL = URL(fileURLWithPath: "src/assets/baking-paper-bg.png")
  if let nsBgImage = NSImage(contentsOf: bgURL) {
    var bgRect = CGRect(origin: .zero, size: nsBgImage.size)
    bgCGImage = nsBgImage.cgImage(forProposedRect: &bgRect, context: nil, hints: nil)
  }
}

if bgCGImage == nil {
  print("Warning: Background image not loaded. Using solid cream background.")
}

let outputSize = 1200
let creamColor = CGColor(red: 246.0/255.0, green: 235.0/255.0, blue: 218.0/255.0, alpha: 1.0)

func imageFiles(in dir: URL) throws -> [URL] {
  let urls = try FileManager.default.contentsOfDirectory(
    at: dir,
    includingPropertiesForKeys: [.isRegularFileKey],
    options: [.skipsHiddenFiles]
  )

  return urls
    .filter { ["jpg", "jpeg", "png", "heic"].contains($0.pathExtension.lowercased()) }
    .sorted { $0.lastPathComponent.localizedStandardCompare($1.lastPathComponent) == .orderedAscending }
}

func outputName(for url: URL) -> String {
  url.deletingPathExtension().lastPathComponent
    .replacingOccurrences(of: "WhatsApp Image 2026-05-26 at ", with: "pan-")
    .replacingOccurrences(of: " ", with: "-")
    .replacingOccurrences(of: ".", with: "")
    .lowercased() + ".jpg"
}

let files = try imageFiles(in: inputDir)
print("Found \(files.count) image files to process.")

let ciContext = CIContext(options: nil)
let colorSpace = CGColorSpaceCreateDeviceRGB()

for (index, file) in files.enumerated() {
  autoreleasepool {
    do {
      guard let nsImage = NSImage(contentsOf: file) else {
        print("[\(index + 1)/\(files.count)] Error: Could not load \(file.lastPathComponent)")
        return
      }
      
      var rect = CGRect(origin: .zero, size: nsImage.size)
      guard let cgImage = nsImage.cgImage(forProposedRect: &rect, context: nil, hints: nil) else {
        print("[\(index + 1)/\(files.count)] Error: Could not get CGImage for \(file.lastPathComponent)")
        return
      }
      
      let originalWidth = cgImage.width
      let originalHeight = cgImage.height
      
      // 1. Perform Foreground Segmentation
      let request = VNGenerateForegroundInstanceMaskRequest()
      let handler = VNImageRequestHandler(cgImage: cgImage, options: [:])
      try handler.perform([request])
      
      guard let result = request.results?.first else {
        print("[\(index + 1)/\(files.count)] Error: No Vision segmenter result for \(file.lastPathComponent)")
        return
      }
      
      guard let maskPixelBuffer = try? result.generateScaledMaskForImage(forInstances: result.allInstances, from: handler) else {
        print("[\(index + 1)/\(files.count)] Error: Could not generate mask for \(file.lastPathComponent)")
        return
      }
      
      // 2. Toning (Appetizing Tone) using CoreImage
      let originalCI = CIImage(cgImage: cgImage)
      
      let colorFilter = CIFilter.colorControls()
      colorFilter.inputImage = originalCI
      colorFilter.saturation = 1.15
      colorFilter.contrast = 1.05
      colorFilter.brightness = 0.015
      let tonedCI = colorFilter.outputImage ?? originalCI
      
      // 3. Apply Mask
      let maskCI = CIImage(cvPixelBuffer: maskPixelBuffer)
      let scaleX = CGFloat(originalWidth) / maskCI.extent.width
      let scaleY = CGFloat(originalHeight) / maskCI.extent.height
      let scaledMaskCI = maskCI.transformed(by: CGAffineTransform(scaleX: scaleX, y: scaleY))
      
      let blendFilter = CIFilter.blendWithMask()
      blendFilter.inputImage = tonedCI
      blendFilter.backgroundImage = CIImage.empty()
      blendFilter.maskImage = scaledMaskCI
      
      guard let outputCI = blendFilter.outputImage else {
        print("[\(index + 1)/\(files.count)] Error: Could not blend mask for \(file.lastPathComponent)")
        return
      }
      
      guard let transparentBreadCG = ciContext.createCGImage(outputCI, from: outputCI.extent) else {
        print("[\(index + 1)/\(files.count)] Error: Could not render transparent bread for \(file.lastPathComponent)")
        return
      }
      
      // 4. Crop to Square
      let side = min(originalWidth, originalHeight)
      let cropX = (originalWidth - side) / 2
      let cropY = max(0, (originalHeight - side) / 2 - Int(Double(side) * 0.04))
      let cropRect = CGRect(x: cropX, y: min(cropY, originalHeight - side), width: side, height: side)
      
      guard let croppedTransparentCG = transparentBreadCG.cropping(to: cropRect) else {
        print("[\(index + 1)/\(files.count)] Error: Cropping failed for \(file.lastPathComponent)")
        return
      }
      
      // 5. Draw on Background with Drop Shadow
      guard let drawContext = CGContext(
          data: nil,
          width: outputSize,
          height: outputSize,
          bitsPerComponent: 8,
          bytesPerRow: 0,
          space: colorSpace,
          bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue
      ) else {
          print("[\(index + 1)/\(files.count)] Error: Could not create draw context for \(file.lastPathComponent)")
          return
      }
      
      if let bgImage = bgCGImage {
        drawContext.draw(bgImage, in: CGRect(x: 0, y: 0, width: outputSize, height: outputSize))
      } else {
        drawContext.setFillColor(creamColor)
        drawContext.fill(CGRect(x: 0, y: 0, width: outputSize, height: outputSize))
      }
      
      drawContext.saveGState()
      drawContext.setShadow(
          offset: CGSize(width: 0, height: -12),
          blur: 32,
          color: CGColor(red: 0.12, green: 0.08, blue: 0.05, alpha: 0.22)
      )
      
      // Use 88% size to leave a professional margin
      let contentSize = CGFloat(outputSize) * 0.88
      let offset = (CGFloat(outputSize) - contentSize) / 2.0
      let destRect = CGRect(x: offset, y: offset, width: contentSize, height: contentSize)
      
      drawContext.draw(croppedTransparentCG, in: destRect)
      drawContext.restoreGState()
      
      guard let finalCGImage = drawContext.makeImage() else {
          print("[\(index + 1)/\(files.count)] Error: Could not make final CGImage for \(file.lastPathComponent)")
          return
      }
      
      // 6. Write final JPEG
      let outURL = outputDir.appendingPathComponent(outputName(for: file))
      guard let destination = CGImageDestinationCreateWithURL(outURL as CFURL, UTType.jpeg.identifier as CFString, 1, nil) else {
          print("[\(index + 1)/\(files.count)] Error: Could not create destination for \(file.lastPathComponent)")
          return
      }
      
      let options = [kCGImageDestinationLossyCompressionQuality: 0.90] as CFDictionary
      CGImageDestinationAddImage(destination, finalCGImage, options)
      if CGImageDestinationFinalize(destination) {
          print("[\(index + 1)/\(files.count)] \(outURL.lastPathComponent)")
      } else {
          print("[\(index + 1)/\(files.count)] Error: Could not save \(outURL.lastPathComponent)")
      }
      
    } catch {
      print("[\(index + 1)/\(files.count)] Error processing \(file.lastPathComponent): \(error.localizedDescription)")
    }
  }
}
