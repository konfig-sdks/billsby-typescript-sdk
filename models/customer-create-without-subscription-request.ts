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

import { CustomerCreateWithoutSubscriptionRequestCardDetails } from './customer-create-without-subscription-request-card-details';

/**
 * 
 * @export
 * @interface CustomerCreateWithoutSubscriptionRequest
 */
export interface CustomerCreateWithoutSubscriptionRequest {
    /**
     * 
     * @type {string}
     * @memberof CustomerCreateWithoutSubscriptionRequest
     */
    'addressLine1': string;
    /**
     * 
     * @type {string}
     * @memberof CustomerCreateWithoutSubscriptionRequest
     */
    'addressLine2'?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerCreateWithoutSubscriptionRequest
     */
    'city': string;
    /**
     * 
     * @type {string}
     * @memberof CustomerCreateWithoutSubscriptionRequest
     */
    'state': string;
    /**
     * 
     * @type {string}
     * @memberof CustomerCreateWithoutSubscriptionRequest
     */
    'country': string;
    /**
     * 
     * @type {string}
     * @memberof CustomerCreateWithoutSubscriptionRequest
     */
    'postCode': string;
    /**
     * 
     * @type {string}
     * @memberof CustomerCreateWithoutSubscriptionRequest
     */
    'firstName': string;
    /**
     * 
     * @type {string}
     * @memberof CustomerCreateWithoutSubscriptionRequest
     */
    'lastName': string;
    /**
     * 
     * @type {string}
     * @memberof CustomerCreateWithoutSubscriptionRequest
     */
    'email': string;
    /**
     * 
     * @type {CustomerCreateWithoutSubscriptionRequestCardDetails}
     * @memberof CustomerCreateWithoutSubscriptionRequest
     */
    'cardDetails'?: CustomerCreateWithoutSubscriptionRequestCardDetails;
}
