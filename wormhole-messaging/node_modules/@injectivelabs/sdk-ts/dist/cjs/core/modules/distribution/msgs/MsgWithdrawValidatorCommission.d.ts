import { MsgBase } from '../../MsgBase';
import { CosmosDistributionV1Beta1Tx } from '@injectivelabs/core-proto-ts';
export declare namespace MsgWithdrawValidatorCommission {
    interface Params {
        validatorAddress: string;
    }
    type Proto = CosmosDistributionV1Beta1Tx.MsgWithdrawValidatorCommission;
}
/**
 * @category Messages
 */
export default class MsgWithdrawValidatorCommission extends MsgBase<MsgWithdrawValidatorCommission.Params, MsgWithdrawValidatorCommission.Proto> {
    static fromJSON(params: MsgWithdrawValidatorCommission.Params): MsgWithdrawValidatorCommission;
    toProto(): CosmosDistributionV1Beta1Tx.MsgWithdrawValidatorCommission;
    toData(): {
        validatorAddress: string;
        '@type': string;
    };
    toAmino(): {
        type: string;
        value: {
            validator_address: string;
        };
    };
    toWeb3(): {
        validator_address: string;
        '@type': string;
    };
    toDirectSign(): {
        type: string;
        message: CosmosDistributionV1Beta1Tx.MsgWithdrawValidatorCommission;
    };
    toBinary(): Uint8Array;
}
//# sourceMappingURL=MsgWithdrawValidatorCommission.d.ts.map