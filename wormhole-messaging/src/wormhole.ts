/*
wormhole-messaging scripts @virjilakrum
*/

import { wormhole, Chain, ChainName, Network, TokenId, Message, Signer } from "@wormhole-foundation/sdk";
import { getConfig } from "./config";

// Wormhole with desired networks and chains [init]
const config = getConfig();
const wh = wormhole(config.network, config.chains);

/**
 * Sends a message through the Wormhole network.
 * @param senderAddress - The sender's blockchain address.
 * @param receiverAddress - The receiver's blockchain address.
 * @param message - The message or link to be sent.
 * @param signer - Signer object for transaction signing.
 */

export async function sendMessage(
  senderAddress: string,
  receiverAddress: string,
  message: string,
  signer: Signer
) {
  try {
    const sendChain = wh.getChain(config.sourceChain as ChainName);
    const rcvChain = wh.getChain(config.destinationChain as ChainName);

    /* Message object creating */

    const wormholeMessage: Message = {
      senderAddress,
      receiverAddress,
      payload: new TextEncoder().encode(message),
      nonce: Date.now(),
      consistencyLevel: 0,
    };

    /* Sign and send the message */
    const txHash = await sendChain.sendMessage(wormholeMessage, signer);

    console.log(`Message sent successfully: ${txHash}`);
    return txHash;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
}
