/*
wormhole-messaging scripts @virjilakrum
*/

import {
  wormhole,
  evm,
  solana,
  Chain,
  Network,
  Signer,
} from "@wormhole-foundation/sdk";
import { getConfig } from "./config";

const config = getConfig();

export async function sendFileLink(
  senderAddress: string,
  receiverAddress: string,
  fileLink: string,
  signer: Signer,
) {
  try {
    // Initialize Wormhole object with specified platforms
    const wh = await wormhole(config.network as Network, [evm, solana]);

    // Get chain contexts
    const sendChain = wh.getChain(config.sourceChain as Chain);
    const rcvChain = wh.getChain(config.destinationChain as Chain);

    // Core bridge for sending messages
    const coreBridge = await sendChain.getWormholeCore();

    // Encode the message
    const messagePayload = new TextEncoder().encode(fileLink);

    // Create a transaction to publish the message
    const publishTxs = coreBridge.publishMessage(
      senderAddress,
      messagePayload,
      0, // Nonce
      0, // Consistency level
    );

    // Sign and send the transaction
    const txids = await signSendWait(sendChain, publishTxs, signer);

    // Wait for the VAA (Verified Action Approval)
    const vaa = await wh.getVaa(txids[0].txid, "Uint8Array", 60_000);

    console.log("File link sent successfully with VAA:", vaa);
    return vaa;
  } catch (error) {
    console.error("Error sending file link:", error);
    throw error;
  }
}

async function signSendWait(
  chain: any,
  txs: any[],
  signer: Signer,
): Promise<any[]> {
  const txids = [];

  for (const tx of txs) {
    try {
      // İşlemi imzalama
      const signedTx = await signer.sign(tx);

      // İşlemi ağda yayınlama
      const txid = await chain.sendSignedTransaction(signedTx);

      // İşlem kimliğini saklama
      txids.push(txid);

      console.log(`İşlem başarıyla gönderildi: ${txid}`);
    } catch (error) {
      console.error("İşlem gönderilirken hata oluştu:", error);
      throw error;
    }
  }

  return txids;
}
