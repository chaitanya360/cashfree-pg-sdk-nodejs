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
import { CFCard } from './cFCard';

/**
* The card payment object is used to make payment using either plain card number, saved card instrument id or using cryptogram 
*/
export class CFCardPayment {
    'card': CFCard;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "card",
            "baseName": "card",
            "type": "CFCard"
        }    ];

    static getAttributeTypeMap() {
        return CFCardPayment.attributeTypeMap;
    }
}

