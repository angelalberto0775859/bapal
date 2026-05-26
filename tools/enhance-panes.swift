import AppKit
import Foundation
import ImageIO
import UniformTypeIdentifiers

let args = CommandLine.arguments
guard args.count >= 3 else {
  fputs("Usage: swift tools/enhance-panes.swift <input-dir> <output-dir>\n", stderr)
  exit(64)
}

let inputDir = URL(fileURLWithPath: args[1], isDirectory: true)
let outputDir = URL(fileURLWithPath: args[2], isDirectory: true)
try FileManager.default.createDirectory(at: outputDir, withIntermediateDirectories: true)

let outputSize = 1200

struct RGBA {
  var r: UInt8
  var g: UInt8
  var b: UInt8
  var a: UInt8
}

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

func rgbaBuffer(from url: URL) throws -> (pixels: [RGBA], width: Int, height: Int) {
  guard let nsImage = NSImage(contentsOf: url) else {
    throw NSError(domain: "EnhancePanes", code: 1, userInfo: [NSLocalizedDescriptionKey: "Cannot read image"])
  }

  var rect = CGRect(origin: .zero, size: nsImage.size)
  guard let cgImage = nsImage.cgImage(forProposedRect: &rect, context: nil, hints: nil) else {
    throw NSError(domain: "EnhancePanes", code: 2, userInfo: [NSLocalizedDescriptionKey: "Cannot decode image"])
  }

  let width = cgImage.width
  let height = cgImage.height
  var pixels = [RGBA](repeating: RGBA(r: 0, g: 0, b: 0, a: 255), count: width * height)
  let colorSpace = CGColorSpaceCreateDeviceRGB()

  guard
    let context = CGContext(
      data: &pixels,
      width: width,
      height: height,
      bitsPerComponent: 8,
      bytesPerRow: width * MemoryLayout<RGBA>.stride,
      space: colorSpace,
      bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue
    )
  else {
    throw NSError(domain: "EnhancePanes", code: 3, userInfo: [NSLocalizedDescriptionKey: "Cannot create bitmap context"])
  }

  context.draw(cgImage, in: CGRect(x: 0, y: 0, width: width, height: height))
  return (pixels, width, height)
}

func appetizingTone(_ px: RGBA) -> RGBA {
  func clamp(_ value: Double) -> UInt8 {
    UInt8(max(0, min(255, Int(round(value * 255)))))
  }

  var r = Double(px.r) / 255.0
  var g = Double(px.g) / 255.0
  var b = Double(px.b) / 255.0

  r = (r - 0.5) * 1.07 + 0.5 + 0.025
  g = (g - 0.5) * 1.04 + 0.5 + 0.012
  b = (b - 0.5) * 1.02 + 0.5 - 0.014

  let average = (r + g + b) / 3.0
  r = average + (r - average) * 1.10
  g = average + (g - average) * 1.07
  b = average + (b - average) * 1.02

  let cream = (r: 246.0 / 255.0, g: 235.0 / 255.0, b: 218.0 / 255.0)
  let glaze = 0.035
  r = r * (1 - glaze) + cream.r * glaze
  g = g * (1 - glaze) + cream.g * glaze
  b = b * (1 - glaze) + cream.b * glaze

  return RGBA(r: clamp(r), g: clamp(g), b: clamp(b), a: 255)
}

func sourceCrop(width: Int, height: Int) -> CGRect {
  let side = min(width, height)
  let x = (width - side) / 2
  let y = max(0, (height - side) / 2 - Int(Double(side) * 0.04))
  return CGRect(x: x, y: min(y, height - side), width: side, height: side)
}

func writeJPEG(_ pixels: [RGBA], width: Int, height: Int, to url: URL) throws {
  var data = pixels
  let colorSpace = CGColorSpaceCreateDeviceRGB()
  guard
    let context = CGContext(
      data: &data,
      width: width,
      height: height,
      bitsPerComponent: 8,
      bytesPerRow: width * MemoryLayout<RGBA>.stride,
      space: colorSpace,
      bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue
    ),
    let cgImage = context.makeImage(),
    let destination = CGImageDestinationCreateWithURL(url as CFURL, UTType.jpeg.identifier as CFString, 1, nil)
  else {
    throw NSError(domain: "EnhancePanes", code: 4, userInfo: [NSLocalizedDescriptionKey: "Cannot encode JPEG"])
  }

  CGImageDestinationAddImage(destination, cgImage, [kCGImageDestinationLossyCompressionQuality: 0.9] as CFDictionary)
  CGImageDestinationFinalize(destination)
}

func outputName(for url: URL) -> String {
  url.deletingPathExtension().lastPathComponent
    .replacingOccurrences(of: "WhatsApp Image 2026-05-26 at ", with: "pan-")
    .replacingOccurrences(of: " ", with: "-")
    .replacingOccurrences(of: ".", with: "")
    .lowercased() + ".jpg"
}

let files = try imageFiles(in: inputDir)
for (index, file) in files.enumerated() {
  autoreleasepool {
    do {
      let source = try rgbaBuffer(from: file)
      let crop = sourceCrop(width: source.width, height: source.height)
      var out = [RGBA](repeating: RGBA(r: 246, g: 235, b: 218, a: 255), count: outputSize * outputSize)

      for y in 0..<outputSize {
        for x in 0..<outputSize {
          let srcX = min(source.width - 1, max(0, Int(crop.minX + CGFloat(x) * crop.width / CGFloat(outputSize))))
          let srcY = min(source.height - 1, max(0, Int(crop.minY + CGFloat(y) * crop.height / CGFloat(outputSize))))
          out[y * outputSize + x] = appetizingTone(source.pixels[srcY * source.width + srcX])
        }
      }

      let output = outputDir.appendingPathComponent(outputName(for: file))
      try writeJPEG(out, width: outputSize, height: outputSize, to: output)
      print("[\(index + 1)/\(files.count)] \(output.lastPathComponent)")
    } catch {
      print("error \(file.lastPathComponent): \(error.localizedDescription)")
    }
  }
}
