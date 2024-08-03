import * as fs from "fs";
import * as path from "path";

export async function uploadFile(filePath: string): Promise<string> {
  /*Orjinal sürümde, dosyayı IPFS veya Arweave başka bir depolama sistemine yükleyeceğiz.
  Burada sadece dosya adını bir link gibi döndürüyorum.*/

  if (fs.existsSync(filePath)) {
    const fileName = path.basename(filePath);
    const fileUrl = `https://example.com/files/${fileName}`;
    return fileUrl;
  } else {
    throw new Error("Dosya bulunamadı.");
  }
}
