import { InjectiveExchangeV1Beta1Tx } from '@injectivelabs/core-proto-ts';
import { MsgBase } from '../../MsgBase';
export declare namespace MsgInstantSpotMarketLaunch {
    interface Params {
        proposer: string;
        market: {
            sender: string;
            ticker: string;
            baseDenom: string;
            quoteDenom: string;
            minPriceTickSize: string;
            minQuantityTickSize: string;
        };
    }
    type Proto = InjectiveExchangeV1Beta1Tx.MsgInstantSpotMarketLaunch;
}
/**
 * @category Messages
 */
export default class MsgInstantSpotMarketLaunch extends MsgBase<MsgInstantSpotMarketLaunch.Params, MsgInstantSpotMarketLaunch.Proto> {
    static fromJSON(params: MsgInstantSpotMarketLaunch.Params): MsgInstantSpotMarketLaunch;
    toProto(): InjectiveExchangeV1Beta1Tx.MsgInstantSpotMarketLaunch;
    toData(): {
        sender: string;
        ticker: string;
        baseDenom: string;
        quoteDenom: string;
        minPriceTickSize: string;
        minQuantityTickSize: string;
        '@type': string;
    };
    toAmino(): {
        type: string;
        value: {
            sender: string;
            ticker: string;
            base_denom: string;
            quote_denom: string;
            min_price_tick_size: string;
            min_quantity_tick_size: string;
        };
    };
    toWeb3(): {
        sender: string;
        ticker: string;
        base_denom: string;
        quote_denom: string;
        min_price_tick_size: string;
        min_quantity_tick_size: string;
        '@type': string;
    };
    toDirectSign(): {
        type: string;
        message: InjectiveExchangeV1Beta1Tx.MsgInstantSpotMarketLaunch;
    };
    toBinary(): Uint8Array;
}
//# sourceMappingURL=MsgInstantSpotMarketLaunch.d.ts.map