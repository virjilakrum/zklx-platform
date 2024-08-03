/* arweave scripts for metadata @virjilakrum */

import Arweave from "arweave";
import { JWKInterface } from "arweave/node/lib/wallet";

/*
The Arweave client. [init]
 */

const arweave = Arweave.init({
  host: "arweave.net",
  port: 443,
  protocol: "https",
});

/**
 * Uploads a file to Arweave.
 * @param fileData - The file data to be uploaded.
 * @param wallet - The Arweave wallet key.
 * @returns The URL of the uploaded file.
 */

export async function uploadFile(
  fileData: Buffer,
  wallet: JWKInterface,
): Promise<string> {
  try {
    // Create a transaction for the file
    const transaction = await arweave.createTransaction(
      { data: fileData },
      wallet,
    );

    // Add appropriate tags
    transaction.addTag("Content-Type", "application/octet-stream");

    // Sign and submit the transaction
    await arweave.transactions.sign(transaction, wallet);
    await arweave.transactions.post(transaction);

    // Return the URL of the uploaded file
    return `https://arweave.net/${transaction.id}`;
  } catch (error) {
    console.error("404, Error uploading file to Arweave:", error);
    throw error;
  }
}

/**
 * Uploads metadata to Arweave.
 * @param metadata - The metadata object.
 * @param wallet - The Arweave wallet key.
 * @returns The URL of the uploaded metadata.
 */
export async function uploadMetadata(
  metadata: object,
  wallet: JWKInterface,
): Promise<string> {
  try {
    // Convert metadata to JSON string
    const metadataString = JSON.stringify(metadata);

    // Create a transaction for the metadata
    const transaction = await arweave.createTransaction(
      { data: metadataString },
      wallet,
    );

    // Add appropriate tags
    transaction.addTag("Content-Type", "application/json");

    // Sign and submit the transaction
    await arweave.transactions.sign(transaction, wallet);
    await arweave.transactions.post(transaction);

    // Return the URL of the uploaded metadata
    return `https://arweave.net/${transaction.id}`;
  } catch (error) {
    console.error("Error uploading metadata to Arweave:", error);
    throw error;
  }
}
