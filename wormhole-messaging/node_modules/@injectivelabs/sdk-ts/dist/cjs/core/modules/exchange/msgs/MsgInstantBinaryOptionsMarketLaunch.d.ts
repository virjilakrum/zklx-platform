import { MsgBase } from '../../MsgBase';
import { InjectiveExchangeV1Beta1Tx, InjectiveOracleV1Beta1Oracle } from '@injectivelabs/core-proto-ts';
export declare namespace MsgInstantBinaryOptionsMarketLaunch {
    interface Params {
        proposer: string;
        market: {
            ticker: string;
            admin: string;
            oracleSymbol: string;
            oracleProvider: string;
            oracleScaleFactor: number;
            oracleType: InjectiveOracleV1Beta1Oracle.OracleType;
            quoteDenom: string;
            makerFeeRate: string;
            takerFeeRate: string;
            expirationTimestamp: number;
            settlementTimestamp: number;
            minPriceTickSize: string;
            minQuantityTickSize: string;
        };
    }
    type Proto = InjectiveExchangeV1Beta1Tx.MsgInstantBinaryOptionsMarketLaunch;
}
/**
 * @category Messages
 */
export default class MsgInstantBinaryOptionsMarketLaunch extends MsgBase<MsgInstantBinaryOptionsMarketLaunch.Params, MsgInstantBinaryOptionsMarketLaunch.Proto> {
    static fromJSON(params: MsgInstantBinaryOptionsMarketLaunch.Params): MsgInstantBinaryOptionsMarketLaunch;
    toProto(): InjectiveExchangeV1Beta1Tx.MsgInstantBinaryOptionsMarketLaunch;
    toData(): {
        sender: string;
        ticker: string;
        oracleSymbol: string;
        oracleProvider: string;
        oracleType: InjectiveOracleV1Beta1Oracle.OracleType;
        oracleScaleFactor: number;
        makerFeeRate: string;
        takerFeeRate: string;
        expirationTimestamp: string;
        settlementTimestamp: string;
        admin: string;
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
            oracle_symbol: string;
            oracle_provider: string;
            oracle_type: InjectiveOracleV1Beta1Oracle.OracleType;
            oracle_scale_factor: number;
            maker_fee_rate: string;
            taker_fee_rate: string;
            expiration_timestamp: string;
            settlement_timestamp: string;
            admin: string;
            quote_denom: string;
            min_price_tick_size: string;
            min_quantity_tick_size: string;
        };
    };
    toWeb3(): {
        sender: string;
        ticker: string;
        oracle_symbol: string;
        oracle_provider: string;
        oracle_type: InjectiveOracleV1Beta1Oracle.OracleType;
        oracle_scale_factor: number;
        maker_fee_rate: string;
        taker_fee_rate: string;
        expiration_timestamp: string;
        settlement_timestamp: string;
        admin: string;
        quote_denom: string;
        min_price_tick_size: string;
        min_quantity_tick_size: string;
        '@type': string;
    };
    toDirectSign(): {
        type: string;
        message: InjectiveExchangeV1Beta1Tx.MsgInstantBinaryOptionsMarketLaunch;
    };
    toBinary(): Uint8Array;
}
//# sourceMappingURL=MsgInstantBinaryOptionsMarketLaunch.d.ts.map