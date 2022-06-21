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

import { RequestFile } from './models';

export class CFError {
    'message'?: string;
    'code'?: string;
    /**
    * One of [\"invalid_request_error\", \"authentication_error\", \"rate_limit_error\", \"validation_error\", \"api_error\"]
    */
    'type'?: CFError.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CFError.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return CFError.attributeTypeMap;
    }
}

export namespace CFError {
    export enum TypeEnum {
        InvalidRequestError = <any> 'invalid_request_error',
        AuthenticationError = <any> 'authentication_error',
        RateLimitError = <any> 'rate_limit_error',
        ValidationError = <any> 'validation_error',
        ApiError = <any> 'api_error'
    }
}
