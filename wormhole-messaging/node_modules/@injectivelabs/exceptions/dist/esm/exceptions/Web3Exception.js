import { ConcreteException } from '../exception';
import { ErrorType } from '../types';
export class Web3Exception extends ConcreteException {
    errorClass = 'Web3Exception';
    constructor(error, context) {
        super(error, context);
        this.type = ErrorType.Web3;
    }
}
//# sourceMappingURL=Web3Exception.js.map