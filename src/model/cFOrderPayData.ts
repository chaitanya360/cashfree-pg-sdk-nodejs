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

export class CFOrderPayData {
    'url'?: string | null;
    'payload'?: object | null;
    'contentType'?: string;
    'method'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "payload",
            "baseName": "payload",
            "type": "object"
        },
        {
            "name": "contentType",
            "baseName": "content_type",
            "type": "string"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CFOrderPayData.attributeTypeMap;
    }
}

