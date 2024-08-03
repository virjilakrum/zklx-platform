export declare abstract class BaseWasmQuery<Params> {
    params: Params;
    constructor(params: Params);
    abstract toPayload(): string;
}
//# sourceMappingURL=BaseWasmQuery.d.ts.map