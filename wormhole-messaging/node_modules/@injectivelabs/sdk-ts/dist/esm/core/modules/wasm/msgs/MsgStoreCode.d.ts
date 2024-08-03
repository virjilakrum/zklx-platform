import { MsgBase } from '../../MsgBase';
import { CosmwasmWasmV1Tx } from '@injectivelabs/core-proto-ts';
export declare namespace MsgStoreCode {
    interface Params {
        sender: string;
        wasmBytes: Uint8Array | string;
    }
    type Proto = CosmwasmWasmV1Tx.MsgStoreCode;
}
/**
 * @category Messages
 */
export default class MsgStoreCode extends MsgBase<MsgStoreCode.Params, MsgStoreCode.Proto> {
    static fromJSON(params: MsgStoreCode.Params): MsgStoreCode;
    toProto(): CosmwasmWasmV1Tx.MsgStoreCode;
    toData(): {
        sender: string;
        wasmByteCode: Uint8Array;
        instantiatePermission: import("@injectivelabs/core-proto-ts/cjs/cosmwasm/wasm/v1/types").AccessConfig | undefined;
        '@type': string;
    };
    toAmino(): {
        type: string;
        value: {
            sender: string;
            wasm_byte_code: Uint8Array;
            instantiate_permission: import("@injectivelabs/core-proto-ts/cjs/cosmwasm/wasm/v1/types").AccessConfig | undefined;
        };
    };
    toWeb3(): {
        sender: string;
        wasm_byte_code: Uint8Array;
        instantiate_permission: import("@injectivelabs/core-proto-ts/cjs/cosmwasm/wasm/v1/types").AccessConfig | undefined;
        '@type': string;
    };
    toDirectSign(): {
        type: string;
        message: CosmwasmWasmV1Tx.MsgStoreCode;
    };
    toBinary(): Uint8Array;
}
//# sourceMappingURL=MsgStoreCode.d.ts.map