/* index scripts arweave-wormhole implementation @virjilakrum */
// wormhole-file-transfer/src/index.ts

import { sendFileLink } from "./wormhole";
import { uploadFile } from "./utils";
import { getConfig } from "./config";
import EVMSigner from "./evmSigner";
import * as readline from "readline";

const config = getConfig();

// Örnek özel anahtar, GERÇEK KODDA GÜVENLİK AMAÇLI KULLANILMAMALIDIR.
const privateKey = "your_private_key_here";

// EVMSigner örneği oluştur
const signer = new EVMSigner(privateKey, config.sourceChain);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  try {
    rl.question(
      "Göndermek istediğiniz dosyanın yolunu girin: ",
      async (filePath) => {
        try {
          const fileLink = await uploadFile(filePath);
          rl.question("Alıcının adresini girin: ", async (recipientAddress) => {
            const senderAddress = signer.address; // Gönderici adresi, signer'dan alınır

            // Dosya linkini gönder
            const vaa = await sendFileLink(
              senderAddress,
              recipientAddress,
              fileLink,
              signer,
            );
            console.log(`Dosya linki başarıyla gönderildi: ${vaa}`);
            rl.close();
          });
        } catch (error) {
          console.error("Dosya yükleme hatası:", error);
          rl.close();
        }
      },
    );
  } catch (error) {
    console.error("Hata:", error);
    rl.close();
  }
}

main();
