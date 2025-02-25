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

import { CustomerAddSubscriptionToExistingCustomerRequestAddOnsInner } from './customer-add-subscription-to-existing-customer-request-add-ons-inner';

/**
 * 
 * @export
 * @interface SubscriptionChangePlanRequest
 */
export interface SubscriptionChangePlanRequest {
    /**
     * The unique identifier of the plan that you want to change the subscription to in the Billsby platform
     * @type {number}
     * @memberof SubscriptionChangePlanRequest
     */
    'planId': number;
    /**
     * The unique identifier of the cycle that you want to change the subscription to in the Billsby platform
     * @type {number}
     * @memberof SubscriptionChangePlanRequest
     */
    'cycleId': number;
    /**
     * The unique identifier of the subscription in the Billsby platform
     * @type {string}
     * @memberof SubscriptionChangePlanRequest
     */
    'customerUniqueId': string;
    /**
     * Immediate = 1 OnRenewal = 2
     * @type {number}
     * @memberof SubscriptionChangePlanRequest
     */
    'planChangeType'?: number;
    /**
     * The number of units required (for cycles with mulitple units allowed)
     * @type {number}
     * @memberof SubscriptionChangePlanRequest
     */
    'units'?: number;
    /**
     * 
     * @type {Array<CustomerAddSubscriptionToExistingCustomerRequestAddOnsInner>}
     * @memberof SubscriptionChangePlanRequest
     */
    'addOns'?: Array<CustomerAddSubscriptionToExistingCustomerRequestAddOnsInner>;
    /**
     * 
     * @type {Array<number>}
     * @memberof SubscriptionChangePlanRequest
     */
    'allowances'?: Array<number>;
    /**
     * In case of immediate change, this will apply a refund into the first invoice of the new plan based on the prorated amount of the current plan
     * @type {boolean}
     * @memberof SubscriptionChangePlanRequest
     */
    'issueRefund'?: boolean;
}

