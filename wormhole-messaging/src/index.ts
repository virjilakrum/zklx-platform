/* index scripts arweave-wormhole implementation @virjilakrum */

import { sendMessage } from "./wormhole";
import { uploadFile, uploadMetadata } from "./arweave";
import { getConfig } from "./config";
import { JWKInterface } from "arweave/node/lib/wallet";
import * as fs from "fs";
import * as path from "path";
import * as readline from "readline";

// Configs & Setup
const config = getConfig();
const walletPath = path.join(__dirname, "..", "wallet", "arweave-wallet.json");

// Load Arweave wallet
const wallet: JWKInterface = JSON.parse(fs.readFileSync(walletPath, "utf-8"));

// Setup readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Prompts the user for input and sends a file and metadata via Wormhole.
 */

async function main() {
  try {
    // Ask for file path
    rl.question("Enter the path of the file to upload: ", async (filePath) => {
      if (!fs.existsSync(filePath)) {
        console.error("File does not exist.");
        rl.close();
        return;
      }

      // Read file data
      const fileData = fs.readFileSync(filePath);

      // Upload file to Arweave
      const fileUrl = await uploadFile(fileData, wallet);
      console.log(`File uploaded to Arweave: ${fileUrl}`);

      // Create metadata
      const metadata = {
        name: path.basename(filePath),
        description: "File uploaded via Lokomotive.",
        image: fileUrl,
      };

      // Upload metadata to Arweave
      const metadataUrl = await uploadMetadata(metadata, wallet);
      console.log(`Metadata uploaded to Arweave: ${metadataUrl}`);

      // Ask for recipient address
      rl.question(
        "Enter the recipient Arweave address: ",
        async (recipientAddress) => {
          // Send the metadata link as a message via Wormhole
          const senderAddress = ""; // Set your sender address here
          const txHash = await sendMessage(
            senderAddress,
            recipientAddress,
            metadataUrl,
            {
              chain: () => config.sourceChain,
              address: () => senderAddress,
              signAndSend: async (txs) => {
                // Implement your transaction signing and sending logic here
                return txs.map(() => "txHash"); // Mock transaction hash for demonstration
              },
            },
          );

          console.log(`Message sent successfully: ${txHash}`);
          rl.close();
        },
      );
    });
  } catch (error) {
    console.error("An error occurred:", error);
    rl.close();
  }
}

main();
