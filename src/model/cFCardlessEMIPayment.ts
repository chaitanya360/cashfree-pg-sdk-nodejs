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
import { CFCardlessEMI } from './cFCardlessEMI';

export class CFCardlessEMIPayment {
    'cardlessEmi': CFCardlessEMI;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cardlessEmi",
            "baseName": "cardless_emi",
            "type": "CFCardlessEMI"
        }    ];

    static getAttributeTypeMap() {
        return CFCardlessEMIPayment.attributeTypeMap;
    }
}

