import Foundation
import Vision
import AppKit

let dirPath = "/Users/Angelarista/Desktop/Paginas/bapal/src/assets/Panes/edited"
let fm = FileManager.default
let urls = try fm.contentsOfDirectory(
  at: URL(fileURLWithPath: dirPath),
  includingPropertiesForKeys: nil
)

for url in urls.sorted(by: { $0.lastPathComponent.localizedStandardCompare($1.lastPathComponent) == .orderedAscending }) {
  guard ["jpg", "jpeg"].contains(url.pathExtension.lowercased()) else { continue }
  
  guard let image = NSImage(contentsOf: url) else {
    print("\(url.lastPathComponent): Failed to load image")
    continue
  }
  
  var rect = CGRect(origin: .zero, size: image.size)
  guard let cgImage = image.cgImage(forProposedRect: &rect, context: nil, hints: nil) else {
    print("\(url.lastPathComponent): Failed to load cgImage")
    continue
  }
  
  let requestHandler = VNImageRequestHandler(cgImage: cgImage, options: [:])
  let request = VNClassifyImageRequest()
  
  do {
    try requestHandler.perform([request])
    if let results = request.results {
      let topResults = results
        .filter { $0.confidence > 0.05 }
        .prefix(3)
        .map { "\($0.identifier) (\(String(format: "%.2f", $0.confidence)))" }
      print("\(url.lastPathComponent): \(topResults.joined(separator: ", "))")
    } else {
      print("\(url.lastPathComponent): No results")
    }
  } catch {
    print("\(url.lastPathComponent): Error \(error.localizedDescription)")
  }
}
