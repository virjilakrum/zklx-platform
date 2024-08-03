import { ConcreteException } from '../exception';
import { ErrorType } from '../types';
export class CosmosWalletException extends ConcreteException {
    errorClass = 'CosmosWalletException';
    constructor(error, context) {
        super(error, context);
        this.type = ErrorType.WalletError;
    }
}
//# sourceMappingURL=CosmosWalletException.js.map