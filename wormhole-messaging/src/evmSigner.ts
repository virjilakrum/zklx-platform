import { Signer } from "@wormhole-foundation/sdk";
import { ethers } from "ethers";

class EVMSigner implements Signer {
  private wallet: ethers.Wallet;

  constructor(privateKey: string) {
    this.wallet = new ethers.Wallet(privateKey);
  }

  async sign(data: Uint8Array): Promise<Uint8Array> {
    // Veriyi imzalama
    const signature = await this.wallet.signMessage(data);
    return ethers.utils.arrayify(signature);
  }

  getPublicKey(): Uint8Array {
    // Public key'i döndür
    return ethers.utils.arrayify(this.wallet.publicKey);
  }
}

export default EVMSigner;
