import { ConcreteException } from '../exception';
import { ErrorType } from '../types';
export class TrezorException extends ConcreteException {
    errorClass = 'TrezorException';
    constructor(error, context) {
        super(error, context);
        this.type = ErrorType.WalletError;
    }
}
//# sourceMappingURL=TrezorException.js.map