import { MsgBase } from '../../MsgBase';
import { CosmosAuthzV1Beta1Tx } from '@injectivelabs/core-proto-ts';
export declare namespace MsgRevoke {
    interface Params {
        messageType: string;
        grantee: string;
        granter: string;
    }
    type Proto = CosmosAuthzV1Beta1Tx.MsgRevoke;
}
/**
 * @category Messages
 */
export default class MsgRevoke extends MsgBase<MsgRevoke.Params, MsgRevoke.Proto> {
    static fromJSON(params: MsgRevoke.Params): MsgRevoke;
    toProto(): CosmosAuthzV1Beta1Tx.MsgRevoke;
    toData(): {
        granter: string;
        grantee: string;
        msgTypeUrl: string;
        '@type': string;
    };
    toAmino(): {
        type: string;
        value: {
            granter: string;
            grantee: string;
            msg_type_url: string;
        };
    };
    toWeb3(): {
        granter: string;
        grantee: string;
        msg_type_url: string;
        '@type': string;
    };
    toDirectSign(): {
        type: string;
        message: CosmosAuthzV1Beta1Tx.MsgRevoke;
    };
    toBinary(): Uint8Array;
}
//# sourceMappingURL=MsgRevoke.d.ts.map