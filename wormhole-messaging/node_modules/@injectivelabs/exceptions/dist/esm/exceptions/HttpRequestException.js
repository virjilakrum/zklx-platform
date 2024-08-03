import { ConcreteException } from '../exception';
import { ErrorType, HttpRequestMethod } from '../types';
export class HttpRequestException extends ConcreteException {
    errorClass = 'HttpRequestException';
    method = HttpRequestMethod.Get;
    constructor(error, context) {
        super(error, context);
        this.type = ErrorType.HttpRequest;
        this.method = context
            ? context.method || HttpRequestMethod.Get
            : HttpRequestMethod.Get;
    }
}
//# sourceMappingURL=HttpRequestException.js.map