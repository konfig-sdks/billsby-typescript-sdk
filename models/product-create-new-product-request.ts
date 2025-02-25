/*
Billsby API

Billsby is a feature-rich \"Saas\" recurring payment platform, ranked as the leading subscription billing software by G2.

Billsby is designed to ensure customers can go live quickly, often within 1-2 hours.  To help facilitate this process we have a team of friendly knowledgeable advisors ready to help your business go live.    

Billsby specializes in providing great customer service at an affordable price point - our technology is rated No 1 on G2 by our customers.

If you are a developer creating a solution for your customer, Billsby has a friendly well-documented API.  The Billsby team are here to provide support to developers in order to ensure a smooth migration or new system build. 

Why not book a call, talk through your Billing requirements and we can let you know how we can help you transform your business..

The version of the OpenAPI document: 1.3.5


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ProductUpdateProductRequestOrderedCustomFields } from './product-update-product-request-ordered-custom-fields';
import { ProductUpdateProductRequestProductCountryLimitations } from './product-update-product-request-product-country-limitations';

/**
 * 
 * @export
 * @interface ProductCreateNewProductRequest
 */
export interface ProductCreateNewProductRequest {
    /**
     * A short description of the product
     * @type {string}
     * @memberof ProductCreateNewProductRequest
     */
    'description'?: string;
    /**
     * The internal name of the product you want to create
     * @type {string}
     * @memberof ProductCreateNewProductRequest
     */
    'name'?: string;
    /**
     * The type of visibility of each product; public, hidden and on-sale. Available values: 0, 1, 2, 3 (Public=0, Hidden=1, Internal=2, OffSale=3)
     * @type {number}
     * @memberof ProductCreateNewProductRequest
     */
    'visibility'?: number;
    /**
     * The currency you want to the product to be billed in. This must be an ISO3 currency code with maximum three characters. For example: GBP, USD, etc.
     * @type {string}
     * @memberof ProductCreateNewProductRequest
     */
    'billingCurrency'?: string;
    /**
     * The display name of the product you want to create
     * @type {string}
     * @memberof ProductCreateNewProductRequest
     */
    'displayName'?: string;
    /**
     * Do you need to collect a shipping address from your customers for this product; true or false
     * @type {boolean}
     * @memberof ProductCreateNewProductRequest
     */
    'isShippingAddressRequired'?: boolean;
    /**
     * Do you want to validate the shipping address using our tool; true or false
     * @type {boolean}
     * @memberof ProductCreateNewProductRequest
     */
    'isShippingAddressValidationRequired'?: boolean;
    /**
     * Do you want to validate the billing address using our tool; true or false
     * @type {boolean}
     * @memberof ProductCreateNewProductRequest
     */
    'isBillingAddressValidationRequired'?: boolean;
    /**
     * Do you want to collect an additional email address from your customers at checkout; true or false
     * @type {boolean}
     * @memberof ProductCreateNewProductRequest
     */
    'isAdditionalEmailRequired'?: boolean;
    /**
     * Do you need to collect a phone number from your customers at checkout; true or false
     * @type {boolean}
     * @memberof ProductCreateNewProductRequest
     */
    'isPhoneNumberRequired'?: boolean;
    /**
     * Do you need to get marketing consent from your customers at checkout; true or false
     * @type {boolean}
     * @memberof ProductCreateNewProductRequest
     */
    'is MarketingConsentRequired'?: boolean;
    /**
     * Set an email to be alerted when a customer signs up for this product
     * @type {string}
     * @memberof ProductCreateNewProductRequest
     */
    'alertEmail'?: string;
    /**
     * 
     * @type {ProductUpdateProductRequestOrderedCustomFields}
     * @memberof ProductCreateNewProductRequest
     */
    'orderedCustomFields'?: ProductUpdateProductRequestOrderedCustomFields;
    /**
     * The type of product you want to create; 1 is tiered
     * @type {number}
     * @memberof ProductCreateNewProductRequest
     */
    'typeOfProduct'?: number;
    /**
     * 
     * @type {ProductUpdateProductRequestProductCountryLimitations}
     * @memberof ProductCreateNewProductRequest
     */
    'productCountryLimitation'?: ProductUpdateProductRequestProductCountryLimitations;
    /**
     * Do you want to allow any country allowed access to the product; true or false
     * @type {boolean}
     * @memberof ProductCreateNewProductRequest
     */
    'isAnyCountryAllowed'?: boolean;
}

