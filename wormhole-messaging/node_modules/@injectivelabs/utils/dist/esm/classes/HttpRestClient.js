import axios from 'axios';
import { HttpRequestException, UnspecifiedErrorCode, HttpRequestMethod, } from '@injectivelabs/exceptions';
import { StatusCodes } from 'http-status-codes';
import HttpClient from './HttpClient';
const getErrorMessage = (error, endpoint) => {
    if (!error.response) {
        return `The request to ${endpoint} has failed.`;
    }
    return error.response.data
        ? error.response.data.message || error.response.data
        : error.response.statusText;
};
/**
 * @hidden
 */
export default class HttpRestClient {
    client;
    endpoint;
    constructor(endpoint, options = {}) {
        this.client = new HttpClient(endpoint, options);
        this.endpoint = endpoint;
    }
    setConfig(config) {
        this.client.setConfig(config);
        return this;
    }
    async get(endpoint, params = {}) {
        try {
            return await this.client.get(endpoint, params);
        }
        catch (e) {
            const error = e;
            if (axios.isAxiosError(error)) {
                if (error.code === 'ECONNABORTED') {
                    throw new HttpRequestException(new Error(error.message), {
                        code: StatusCodes.REQUEST_TOO_LONG,
                        context: endpoint,
                        method: HttpRequestMethod.Get,
                    });
                }
                const message = getErrorMessage(error, endpoint);
                throw new HttpRequestException(new Error(message), {
                    context: endpoint,
                    code: error.response
                        ? error.response.status
                        : StatusCodes.BAD_REQUEST,
                    method: HttpRequestMethod.Get,
                });
            }
            throw new HttpRequestException(new Error(error.message), {
                code: UnspecifiedErrorCode,
                context: endpoint,
                contextModule: HttpRequestMethod.Get,
            });
        }
    }
    async post(endpoint, params = {}) {
        try {
            return await this.client.post(endpoint, params);
        }
        catch (e) {
            const error = e;
            if (axios.isAxiosError(error)) {
                if (error.code === 'ECONNABORTED') {
                    throw new HttpRequestException(new Error(error.message), {
                        code: StatusCodes.REQUEST_TOO_LONG,
                        method: HttpRequestMethod.Post,
                    });
                }
                const message = getErrorMessage(error, endpoint);
                throw new HttpRequestException(new Error(message), {
                    code: error.response
                        ? error.response.status
                        : StatusCodes.BAD_REQUEST,
                    context: endpoint,
                    contextModule: HttpRequestMethod.Post,
                });
            }
            throw new HttpRequestException(new Error(error.message), {
                code: UnspecifiedErrorCode,
                context: endpoint,
                contextModule: HttpRequestMethod.Post,
            });
        }
    }
}
//# sourceMappingURL=HttpRestClient.js.map