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
import { CFUPIAuthorizeDetails } from './cFUPIAuthorizeDetails';

export class CFUPI {
    /**
    * Specify the channel through which the payment must be processed. Can be one of [\"link\", \"collect\", \"qrcode\"]
    */
    'channel': CFUPI.ChannelEnum;
    /**
    * Customer UPI VPA to process payment.
    */
    'upiId': string;
    /**
    * For one time mandate on UPI. Set this as authorize_only = true. Please note that you can only use the \"collect\" channel if you are sending a one time mandate request
    */
    'authorizeOnly'?: boolean;
    'authorization'?: CFUPIAuthorizeDetails;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "channel",
            "baseName": "channel",
            "type": "CFUPI.ChannelEnum"
        },
        {
            "name": "upiId",
            "baseName": "upi_id",
            "type": "string"
        },
        {
            "name": "authorizeOnly",
            "baseName": "authorize_only",
            "type": "boolean"
        },
        {
            "name": "authorization",
            "baseName": "authorization",
            "type": "CFUPIAuthorizeDetails"
        }    ];

    static getAttributeTypeMap() {
        return CFUPI.attributeTypeMap;
    }
}

export namespace CFUPI {
    export enum ChannelEnum {
        Link = <any> 'link',
        Collect = <any> 'collect',
        Qrcode = <any> 'qrcode'
    }
}
