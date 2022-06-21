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

export class CFCardEMI {
    /**
    * The channel for card payments will always be \"link\"
    */
    'channel': string = "link";
    /**
    * Customer card number.
    */
    'cardNumber': string;
    /**
    * Customer name mentioned on the card.
    */
    'cardHolderName'?: string;
    /**
    * Card expiry month.
    */
    'cardExpiryMm': string;
    /**
    * Card expiry year.
    */
    'cardExpiryYy': string;
    /**
    * CVV mentioned on the card.
    */
    'cardCvv': string;
    /**
    * Card alias as returned by Cashfree Vault API
    */
    'cardAlias'?: string;
    /**
    * Card bank name, required for EMI payments. This is the bank user has selected for EMI. One of [\"Kotak\", \"ICICI\", \"RBL\", \"BOB\", \"Standard Chartered\", \"HDFC\"]
    */
    'cardBankName': CFCardEMI.CardBankNameEnum;
    /**
    * EMI tenure selected by the user
    */
    'emiTenure': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "channel",
            "baseName": "channel",
            "type": "CFCardEMI.ChannelEnum"
        },
        {
            "name": "cardNumber",
            "baseName": "card_number",
            "type": "string"
        },
        {
            "name": "cardHolderName",
            "baseName": "card_holder_name",
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
            "name": "cardCvv",
            "baseName": "card_cvv",
            "type": "string"
        },
        {
            "name": "cardAlias",
            "baseName": "card_alias",
            "type": "string"
        },
        {
            "name": "cardBankName",
            "baseName": "card_bank_name",
            "type": "CFCardEMI.CardBankNameEnum"
        },
        {
            "name": "emiTenure",
            "baseName": "emi_tenure",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return CFCardEMI.attributeTypeMap;
    }
}

export namespace CFCardEMI {
    export enum ChannelEnum {
        Link = <any> 'link'
    }
    export enum CardBankNameEnum {
        Kotak = <any> 'Kotak',
        Icici = <any> 'ICICI',
        Rbl = <any> 'RBL',
        Bob = <any> 'BOB',
        StandardChartered = <any> 'Standard Chartered',
        Hdfc = <any> 'HDFC'
    }
}
