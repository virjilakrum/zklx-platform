import { Account, StargateClient as CosmjsStargateClient } from '@cosmjs/stargate';
export declare class StargateClient extends CosmjsStargateClient {
    getAccount(searchAddress: string): Promise<Account | null>;
}
//# sourceMappingURL=StargateClient.d.ts.map