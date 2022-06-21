/**
 * New Payment Gateway APIs
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2022-01-01
 * Contact: nextgenapi@cashfree.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { CFCryptogram } from '../model/cFCryptogram';
import { CFError } from '../model/cFError';
import { CFFetchAllSavedInstruments } from '../model/cFFetchAllSavedInstruments';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://sandbox.cashfree.com/pg';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum TokenVaultApiApiKeys {
}

export class TokenVaultApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: TokenVaultApiApiKeys, value: string) {
        (this.authentications as any)[TokenVaultApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * To delete a saved instrument for a customer id and instrument id
     * @summary Delete Saved Instrument
     * @param xClientId 
     * @param xClientSecret 
     * @param customerId 
     * @param instrumentId 
     * @param xApiVersion 
     */
    public async deleteSpecificSavedInstrument (xClientId: string, xClientSecret: string, customerId: string, instrumentId: string, xApiVersion?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ cfHeaders: http.IncomingHttpHeaders; cfInstrument: CFFetchAllSavedInstruments;  }> {
        const localVarPath = this.basePath + '/customers/{customer_id}/instruments/{instrument_id}'
            .replace('{' + 'customer_id' + '}', encodeURIComponent(String(customerId)))
            .replace('{' + 'instrument_id' + '}', encodeURIComponent(String(instrumentId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'xClientId' is not null or undefined
        if (xClientId === null || xClientId === undefined) {
            throw new Error('Required parameter xClientId was null or undefined when calling deleteSpecificSavedInstrument.');
        }

        // verify required parameter 'xClientSecret' is not null or undefined
        if (xClientSecret === null || xClientSecret === undefined) {
            throw new Error('Required parameter xClientSecret was null or undefined when calling deleteSpecificSavedInstrument.');
        }

        // verify required parameter 'customerId' is not null or undefined
        if (customerId === null || customerId === undefined) {
            throw new Error('Required parameter customerId was null or undefined when calling deleteSpecificSavedInstrument.');
        }

        // verify required parameter 'instrumentId' is not null or undefined
        if (instrumentId === null || instrumentId === undefined) {
            throw new Error('Required parameter instrumentId was null or undefined when calling deleteSpecificSavedInstrument.');
        }

        localVarHeaderParams['x-client-id'] = ObjectSerializer.serialize(xClientId, "string");
        localVarHeaderParams['x-client-secret'] = ObjectSerializer.serialize(xClientSecret, "string");
        localVarHeaderParams['x-api-version'] = ObjectSerializer.serialize(xApiVersion, "string");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ cfHeaders: http.IncomingHttpHeaders; cfInstrument: CFFetchAllSavedInstruments;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "CFFetchAllSavedInstruments");
                            resolve({ cfHeaders: response.headers, cfInstrument: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * To get all saved instruments for a customer id
     * @summary Fetch All Saved Instruments
     * @param xClientId 
     * @param xClientSecret 
     * @param customerId 
     * @param instrumentType 
     * @param xApiVersion 
     * @param xIdempotencyReplayed 
     * @param xIdempotencyKey 
     * @param xRequestId 
     */
    public async fetchAllSavedInstruments (xClientId: string, xClientSecret: string, customerId: string, instrumentType: 'card', xApiVersion?: string, xIdempotencyReplayed?: boolean, xIdempotencyKey?: string, xRequestId?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ cfHeaders: http.IncomingHttpHeaders; cfInstruments: Array<CFFetchAllSavedInstruments>;  }> {
        const localVarPath = this.basePath + '/customers/{customer_id}/instruments'
            .replace('{' + 'customer_id' + '}', encodeURIComponent(String(customerId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'xClientId' is not null or undefined
        if (xClientId === null || xClientId === undefined) {
            throw new Error('Required parameter xClientId was null or undefined when calling fetchAllSavedInstruments.');
        }

        // verify required parameter 'xClientSecret' is not null or undefined
        if (xClientSecret === null || xClientSecret === undefined) {
            throw new Error('Required parameter xClientSecret was null or undefined when calling fetchAllSavedInstruments.');
        }

        // verify required parameter 'customerId' is not null or undefined
        if (customerId === null || customerId === undefined) {
            throw new Error('Required parameter customerId was null or undefined when calling fetchAllSavedInstruments.');
        }

        // verify required parameter 'instrumentType' is not null or undefined
        if (instrumentType === null || instrumentType === undefined) {
            throw new Error('Required parameter instrumentType was null or undefined when calling fetchAllSavedInstruments.');
        }

        if (instrumentType !== undefined) {
            localVarQueryParameters['instrument_type'] = ObjectSerializer.serialize(instrumentType, "'card'");
        }

        localVarHeaderParams['x-client-id'] = ObjectSerializer.serialize(xClientId, "string");
        localVarHeaderParams['x-client-secret'] = ObjectSerializer.serialize(xClientSecret, "string");
        localVarHeaderParams['x-api-version'] = ObjectSerializer.serialize(xApiVersion, "string");
        localVarHeaderParams['x-idempotency-replayed'] = ObjectSerializer.serialize(xIdempotencyReplayed, "boolean");
        localVarHeaderParams['x-idempotency-key'] = ObjectSerializer.serialize(xIdempotencyKey, "string");
        localVarHeaderParams['x-request-id'] = ObjectSerializer.serialize(xRequestId, "string");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ cfHeaders: http.IncomingHttpHeaders; cfInstruments: Array<CFFetchAllSavedInstruments>;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Array<CFFetchAllSavedInstruments>");
                            resolve({ cfHeaders: response.headers, cfInstruments: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * To get the card network token, token expiry and cryptogram for a saved instrument using instrument id
     * @summary Fetch cryptogram for saved instrument
     * @param xClientId 
     * @param xClientSecret 
     * @param customerId 
     * @param instrumentId 
     * @param xApiVersion 
     * @param xIdempotencyReplayed 
     * @param xIdempotencyKey 
     * @param xRequestId 
     */
    public async fetchCryptogram (xClientId: string, xClientSecret: string, customerId: string, instrumentId: string, xApiVersion?: string, xIdempotencyReplayed?: boolean, xIdempotencyKey?: string, xRequestId?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ cfHeaders: http.IncomingHttpHeaders; cfCryptogram: CFCryptogram;  }> {
        const localVarPath = this.basePath + '/customers/{customer_id}/instruments/{instrument_id}/cryptogram'
            .replace('{' + 'customer_id' + '}', encodeURIComponent(String(customerId)))
            .replace('{' + 'instrument_id' + '}', encodeURIComponent(String(instrumentId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'xClientId' is not null or undefined
        if (xClientId === null || xClientId === undefined) {
            throw new Error('Required parameter xClientId was null or undefined when calling fetchCryptogram.');
        }

        // verify required parameter 'xClientSecret' is not null or undefined
        if (xClientSecret === null || xClientSecret === undefined) {
            throw new Error('Required parameter xClientSecret was null or undefined when calling fetchCryptogram.');
        }

        // verify required parameter 'customerId' is not null or undefined
        if (customerId === null || customerId === undefined) {
            throw new Error('Required parameter customerId was null or undefined when calling fetchCryptogram.');
        }

        // verify required parameter 'instrumentId' is not null or undefined
        if (instrumentId === null || instrumentId === undefined) {
            throw new Error('Required parameter instrumentId was null or undefined when calling fetchCryptogram.');
        }

        localVarHeaderParams['x-client-id'] = ObjectSerializer.serialize(xClientId, "string");
        localVarHeaderParams['x-client-secret'] = ObjectSerializer.serialize(xClientSecret, "string");
        localVarHeaderParams['x-api-version'] = ObjectSerializer.serialize(xApiVersion, "string");
        localVarHeaderParams['x-idempotency-replayed'] = ObjectSerializer.serialize(xIdempotencyReplayed, "boolean");
        localVarHeaderParams['x-idempotency-key'] = ObjectSerializer.serialize(xIdempotencyKey, "string");
        localVarHeaderParams['x-request-id'] = ObjectSerializer.serialize(xRequestId, "string");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ cfHeaders: http.IncomingHttpHeaders; cfCryptogram: CFCryptogram;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "CFCryptogram");
                            resolve({ cfHeaders: response.headers, cfCryptogram: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * To get specific saved instrument for a customer id and instrument id
     * @summary Fetch Single Saved Instrument
     * @param xClientId 
     * @param xClientSecret 
     * @param customerId 
     * @param instrumentId 
     * @param xApiVersion 
     * @param xIdempotencyReplayed 
     * @param xIdempotencyKey 
     * @param xRequestId 
     */
    public async fetchSpecificSavedInstrument (xClientId: string, xClientSecret: string, customerId: string, instrumentId: string, xApiVersion?: string, xIdempotencyReplayed?: boolean, xIdempotencyKey?: string, xRequestId?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ cfHeaders: http.IncomingHttpHeaders; cfInstrument: CFFetchAllSavedInstruments;  }> {
        const localVarPath = this.basePath + '/customers/{customer_id}/instruments/{instrument_id}'
            .replace('{' + 'customer_id' + '}', encodeURIComponent(String(customerId)))
            .replace('{' + 'instrument_id' + '}', encodeURIComponent(String(instrumentId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'xClientId' is not null or undefined
        if (xClientId === null || xClientId === undefined) {
            throw new Error('Required parameter xClientId was null or undefined when calling fetchSpecificSavedInstrument.');
        }

        // verify required parameter 'xClientSecret' is not null or undefined
        if (xClientSecret === null || xClientSecret === undefined) {
            throw new Error('Required parameter xClientSecret was null or undefined when calling fetchSpecificSavedInstrument.');
        }

        // verify required parameter 'customerId' is not null or undefined
        if (customerId === null || customerId === undefined) {
            throw new Error('Required parameter customerId was null or undefined when calling fetchSpecificSavedInstrument.');
        }

        // verify required parameter 'instrumentId' is not null or undefined
        if (instrumentId === null || instrumentId === undefined) {
            throw new Error('Required parameter instrumentId was null or undefined when calling fetchSpecificSavedInstrument.');
        }

        localVarHeaderParams['x-client-id'] = ObjectSerializer.serialize(xClientId, "string");
        localVarHeaderParams['x-client-secret'] = ObjectSerializer.serialize(xClientSecret, "string");
        localVarHeaderParams['x-api-version'] = ObjectSerializer.serialize(xApiVersion, "string");
        localVarHeaderParams['x-idempotency-replayed'] = ObjectSerializer.serialize(xIdempotencyReplayed, "boolean");
        localVarHeaderParams['x-idempotency-key'] = ObjectSerializer.serialize(xIdempotencyKey, "string");
        localVarHeaderParams['x-request-id'] = ObjectSerializer.serialize(xRequestId, "string");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ cfHeaders: http.IncomingHttpHeaders; cfInstrument: CFFetchAllSavedInstruments;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "CFFetchAllSavedInstruments");
                            resolve({ cfHeaders: response.headers, cfInstrument: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
