/* eslint-disable */
import { grpc } from "@injectivelabs/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { share } from "rxjs/operators";
export const protobufPackage = "injective_auction_rpc";
function createBaseAuctionEndpointRequest() {
    return { round: "0" };
}
export const AuctionEndpointRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.round !== "0") {
            writer.uint32(8).sint64(message.round);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuctionEndpointRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.round = longToString(reader.sint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { round: isSet(object.round) ? String(object.round) : "0" };
    },
    toJSON(message) {
        const obj = {};
        message.round !== undefined && (obj.round = message.round);
        return obj;
    },
    create(base) {
        return AuctionEndpointRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAuctionEndpointRequest();
        message.round = (_a = object.round) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseAuctionEndpointResponse() {
    return { auction: undefined, bids: [] };
}
export const AuctionEndpointResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.auction !== undefined) {
            Auction.encode(message.auction, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.bids) {
            Bid.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuctionEndpointResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auction = Auction.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.bids.push(Bid.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            auction: isSet(object.auction) ? Auction.fromJSON(object.auction) : undefined,
            bids: Array.isArray(object === null || object === void 0 ? void 0 : object.bids) ? object.bids.map((e) => Bid.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.auction !== undefined && (obj.auction = message.auction ? Auction.toJSON(message.auction) : undefined);
        if (message.bids) {
            obj.bids = message.bids.map((e) => e ? Bid.toJSON(e) : undefined);
        }
        else {
            obj.bids = [];
        }
        return obj;
    },
    create(base) {
        return AuctionEndpointResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAuctionEndpointResponse();
        message.auction = (object.auction !== undefined && object.auction !== null)
            ? Auction.fromPartial(object.auction)
            : undefined;
        message.bids = ((_a = object.bids) === null || _a === void 0 ? void 0 : _a.map((e) => Bid.fromPartial(e))) || [];
        return message;
    },
};
function createBaseAuction() {
    return { winner: "", basket: [], winningBidAmount: "", round: "0", endTimestamp: "0", updatedAt: "0" };
}
export const Auction = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.winner !== "") {
            writer.uint32(10).string(message.winner);
        }
        for (const v of message.basket) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.winningBidAmount !== "") {
            writer.uint32(26).string(message.winningBidAmount);
        }
        if (message.round !== "0") {
            writer.uint32(32).uint64(message.round);
        }
        if (message.endTimestamp !== "0") {
            writer.uint32(40).sint64(message.endTimestamp);
        }
        if (message.updatedAt !== "0") {
            writer.uint32(48).sint64(message.updatedAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuction();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.winner = reader.string();
                    break;
                case 2:
                    message.basket.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.winningBidAmount = reader.string();
                    break;
                case 4:
                    message.round = longToString(reader.uint64());
                    break;
                case 5:
                    message.endTimestamp = longToString(reader.sint64());
                    break;
                case 6:
                    message.updatedAt = longToString(reader.sint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            winner: isSet(object.winner) ? String(object.winner) : "",
            basket: Array.isArray(object === null || object === void 0 ? void 0 : object.basket) ? object.basket.map((e) => Coin.fromJSON(e)) : [],
            winningBidAmount: isSet(object.winningBidAmount) ? String(object.winningBidAmount) : "",
            round: isSet(object.round) ? String(object.round) : "0",
            endTimestamp: isSet(object.endTimestamp) ? String(object.endTimestamp) : "0",
            updatedAt: isSet(object.updatedAt) ? String(object.updatedAt) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.winner !== undefined && (obj.winner = message.winner);
        if (message.basket) {
            obj.basket = message.basket.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.basket = [];
        }
        message.winningBidAmount !== undefined && (obj.winningBidAmount = message.winningBidAmount);
        message.round !== undefined && (obj.round = message.round);
        message.endTimestamp !== undefined && (obj.endTimestamp = message.endTimestamp);
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
        return obj;
    },
    create(base) {
        return Auction.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseAuction();
        message.winner = (_a = object.winner) !== null && _a !== void 0 ? _a : "";
        message.basket = ((_b = object.basket) === null || _b === void 0 ? void 0 : _b.map((e) => Coin.fromPartial(e))) || [];
        message.winningBidAmount = (_c = object.winningBidAmount) !== null && _c !== void 0 ? _c : "";
        message.round = (_d = object.round) !== null && _d !== void 0 ? _d : "0";
        message.endTimestamp = (_e = object.endTimestamp) !== null && _e !== void 0 ? _e : "0";
        message.updatedAt = (_f = object.updatedAt) !== null && _f !== void 0 ? _f : "0";
        return message;
    },
};
function createBaseCoin() {
    return { denom: "", amount: "" };
}
export const Coin = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCoin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            denom: isSet(object.denom) ? String(object.denom) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    create(base) {
        return Coin.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCoin();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseBid() {
    return { bidder: "", amount: "", timestamp: "0" };
}
export const Bid = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.bidder !== "") {
            writer.uint32(10).string(message.bidder);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        if (message.timestamp !== "0") {
            writer.uint32(24).sint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBid();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bidder = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                case 3:
                    message.timestamp = longToString(reader.sint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            bidder: isSet(object.bidder) ? String(object.bidder) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.bidder !== undefined && (obj.bidder = message.bidder);
        message.amount !== undefined && (obj.amount = message.amount);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        return obj;
    },
    create(base) {
        return Bid.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseBid();
        message.bidder = (_a = object.bidder) !== null && _a !== void 0 ? _a : "";
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
        message.timestamp = (_c = object.timestamp) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseAuctionsRequest() {
    return {};
}
export const AuctionsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuctionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return AuctionsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseAuctionsRequest();
        return message;
    },
};
function createBaseAuctionsResponse() {
    return { auctions: [] };
}
export const AuctionsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.auctions) {
            Auction.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuctionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auctions.push(Auction.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { auctions: Array.isArray(object === null || object === void 0 ? void 0 : object.auctions) ? object.auctions.map((e) => Auction.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.auctions) {
            obj.auctions = message.auctions.map((e) => e ? Auction.toJSON(e) : undefined);
        }
        else {
            obj.auctions = [];
        }
        return obj;
    },
    create(base) {
        return AuctionsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAuctionsResponse();
        message.auctions = ((_a = object.auctions) === null || _a === void 0 ? void 0 : _a.map((e) => Auction.fromPartial(e))) || [];
        return message;
    },
};
function createBaseStreamBidsRequest() {
    return {};
}
export const StreamBidsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamBidsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return StreamBidsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseStreamBidsRequest();
        return message;
    },
};
function createBaseStreamBidsResponse() {
    return { bidder: "", bidAmount: "", round: "0", timestamp: "0" };
}
export const StreamBidsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.bidder !== "") {
            writer.uint32(10).string(message.bidder);
        }
        if (message.bidAmount !== "") {
            writer.uint32(18).string(message.bidAmount);
        }
        if (message.round !== "0") {
            writer.uint32(24).uint64(message.round);
        }
        if (message.timestamp !== "0") {
            writer.uint32(32).sint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamBidsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bidder = reader.string();
                    break;
                case 2:
                    message.bidAmount = reader.string();
                    break;
                case 3:
                    message.round = longToString(reader.uint64());
                    break;
                case 4:
                    message.timestamp = longToString(reader.sint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            bidder: isSet(object.bidder) ? String(object.bidder) : "",
            bidAmount: isSet(object.bidAmount) ? String(object.bidAmount) : "",
            round: isSet(object.round) ? String(object.round) : "0",
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.bidder !== undefined && (obj.bidder = message.bidder);
        message.bidAmount !== undefined && (obj.bidAmount = message.bidAmount);
        message.round !== undefined && (obj.round = message.round);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        return obj;
    },
    create(base) {
        return StreamBidsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseStreamBidsResponse();
        message.bidder = (_a = object.bidder) !== null && _a !== void 0 ? _a : "";
        message.bidAmount = (_b = object.bidAmount) !== null && _b !== void 0 ? _b : "";
        message.round = (_c = object.round) !== null && _c !== void 0 ? _c : "0";
        message.timestamp = (_d = object.timestamp) !== null && _d !== void 0 ? _d : "0";
        return message;
    },
};
export class InjectiveAuctionRPCClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.AuctionEndpoint = this.AuctionEndpoint.bind(this);
        this.Auctions = this.Auctions.bind(this);
        this.StreamBids = this.StreamBids.bind(this);
    }
    AuctionEndpoint(request, metadata) {
        return this.rpc.unary(InjectiveAuctionRPCAuctionEndpointDesc, AuctionEndpointRequest.fromPartial(request), metadata);
    }
    Auctions(request, metadata) {
        return this.rpc.unary(InjectiveAuctionRPCAuctionsDesc, AuctionsRequest.fromPartial(request), metadata);
    }
    StreamBids(request, metadata) {
        return this.rpc.invoke(InjectiveAuctionRPCStreamBidsDesc, StreamBidsRequest.fromPartial(request), metadata);
    }
}
export const InjectiveAuctionRPCDesc = { serviceName: "injective_auction_rpc.InjectiveAuctionRPC" };
export const InjectiveAuctionRPCAuctionEndpointDesc = {
    methodName: "AuctionEndpoint",
    service: InjectiveAuctionRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return AuctionEndpointRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = AuctionEndpointResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const InjectiveAuctionRPCAuctionsDesc = {
    methodName: "Auctions",
    service: InjectiveAuctionRPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return AuctionsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = AuctionsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const InjectiveAuctionRPCStreamBidsDesc = {
    methodName: "StreamBids",
    service: InjectiveAuctionRPCDesc,
    requestStream: false,
    responseStream: true,
    requestType: {
        serializeBinary() {
            return StreamBidsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = StreamBidsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export class GrpcWebImpl {
    constructor(host, options) {
        this.host = host;
        this.options = options;
    }
    unary(methodDesc, _request, metadata) {
        var _a;
        const request = Object.assign(Object.assign({}, _request), methodDesc.requestType);
        const maybeCombinedMetadata = metadata && this.options.metadata
            ? new BrowserHeaders(Object.assign(Object.assign({}, (_a = this.options) === null || _a === void 0 ? void 0 : _a.metadata.headersMap), metadata === null || metadata === void 0 ? void 0 : metadata.headersMap))
            : metadata || this.options.metadata;
        return new Promise((resolve, reject) => {
            grpc.unary(methodDesc, {
                request,
                host: this.host,
                metadata: maybeCombinedMetadata,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function (response) {
                    if (response.status === grpc.Code.OK) {
                        resolve(response.message.toObject());
                    }
                    else {
                        const err = new GrpcWebError(response.statusMessage, response.status, response.trailers);
                        reject(err);
                    }
                },
            });
        });
    }
    invoke(methodDesc, _request, metadata) {
        var _a;
        const upStreamCodes = this.options.upStreamRetryCodes || [];
        const DEFAULT_TIMEOUT_TIME = 3000;
        const request = Object.assign(Object.assign({}, _request), methodDesc.requestType);
        const maybeCombinedMetadata = metadata && this.options.metadata
            ? new BrowserHeaders(Object.assign(Object.assign({}, (_a = this.options) === null || _a === void 0 ? void 0 : _a.metadata.headersMap), metadata === null || metadata === void 0 ? void 0 : metadata.headersMap))
            : metadata || this.options.metadata;
        return new Observable((observer) => {
            const upStream = (() => {
                const client = grpc.invoke(methodDesc, {
                    host: this.host,
                    request,
                    transport: this.options.streamingTransport || this.options.transport,
                    metadata: maybeCombinedMetadata,
                    debug: this.options.debug,
                    onMessage: (next) => observer.next(next),
                    onEnd: (code, message, trailers) => {
                        if (code === 0) {
                            observer.complete();
                        }
                        else if (upStreamCodes.includes(code)) {
                            setTimeout(upStream, DEFAULT_TIMEOUT_TIME);
                        }
                        else {
                            const err = new Error(message);
                            err.code = code;
                            err.metadata = trailers;
                            observer.error(err);
                        }
                    },
                });
                observer.add(() => client.close());
            });
            upStream();
        }).pipe(share());
    }
}
var tsProtoGlobalThis = (() => {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
})();
function longToString(long) {
    return long.toString();
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
export class GrpcWebError extends tsProtoGlobalThis.Error {
    constructor(message, code, metadata) {
        super(message);
        this.code = code;
        this.metadata = metadata;
    }
}
