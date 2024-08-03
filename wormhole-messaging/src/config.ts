/* config scripts @virjilakrum */

/* Supoorted networks (for now) */
const networkConfig = {
  testnet: {
    network: "Testnet",
    sourceChain: "Ethereum",
    destinationChain: "Solana",
  },
  mainnet: {
    network: "Mainnet",
    sourceChain: "Ethereum",
    destinationChain: "Solana",
  },
};

// The active configuration based on the environment
const activeConfig =
  process.env.NODE_ENV === "production"
    ? networkConfig.mainnet
    : networkConfig.testnet;

/**
 * Retrieves the active configuration for the application.
 * @returns The active configuration settings.
 */

export function getConfig() {
  return activeConfig;
}
