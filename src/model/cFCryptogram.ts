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

export class CFCryptogram {
    /**
    * instrument_id of saved instrument
    */
    'instrumentId'?: string;
    /**
    * TRID issued by card networks
    */
    'tokenRequestorId'?: string;
    /**
    * token pan number
    */
    'cardNumber'?: string;
    /**
    * token pan expiry month
    */
    'cardExpiryMm'?: string;
    /**
    * token pan expiry year
    */
    'cardExpiryYy'?: string;
    /**
    * cryptogram
    */
    'cryptogram'?: string;
    /**
    * last 4 digits of original card number
    */
    'cardDisplay'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "instrumentId",
            "baseName": "instrument_id",
            "type": "string"
        },
        {
            "name": "tokenRequestorId",
            "baseName": "token_requestor_id",
            "type": "string"
        },
        {
            "name": "cardNumber",
            "baseName": "card_number",
            "type": "string"
        },
        {
            "name": "cardExpiryMm",
            "baseName": "card_expiry_mm",
            "type": "string"
        },
        {
            "name": "cardExpiryYy",
            "baseName": "card_expiry_yy",
            "type": "string"
        },
        {
            "name": "cryptogram",
            "baseName": "cryptogram",
            "type": "string"
        },
        {
            "name": "cardDisplay",
            "baseName": "card_display",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CFCryptogram.attributeTypeMap;
    }
}

