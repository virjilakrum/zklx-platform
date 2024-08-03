// wormhole-file-transfer/src/config.ts

export function getConfig() {
  return {
    network: process.env.NODE_ENV === "production" ? "Mainnet" : "Testnet",
    sourceChain: "Ethereum",
    destinationChain: "Solana",
  }
