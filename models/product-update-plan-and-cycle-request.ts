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

import { ProductUpdatePlanAndCycleRequestCycles } from './product-update-plan-and-cycle-request-cycles';

/**
 * 
 * @export
 * @interface ProductUpdatePlanAndCycleRequest
 */
export interface ProductUpdatePlanAndCycleRequest {
    /**
     * The description of the plan
     * @type {string}
     * @memberof ProductUpdatePlanAndCycleRequest
     */
    'description'?: string;
    /**
     * The name of the plan you want to update
     * @type {string}
     * @memberof ProductUpdatePlanAndCycleRequest
     */
    'name'?: string;
    /**
     * The display name of the plan you want to update
     * @type {string}
     * @memberof ProductUpdatePlanAndCycleRequest
     */
    'displayName'?: string;
    /**
     * The feature tags associated with the plan
     * @type {string}
     * @memberof ProductUpdatePlanAndCycleRequest
     */
    'featureTags'?: string;
    /**
     * The visibility of the plan
     * @type {number}
     * @memberof ProductUpdatePlanAndCycleRequest
     */
    'visibility'?: number;
    /**
     * 
     * @type {ProductUpdatePlanAndCycleRequestCycles}
     * @memberof ProductUpdatePlanAndCycleRequest
     */
    'cycles'?: ProductUpdatePlanAndCycleRequestCycles;
    /**
     * The URL you want your customer to redirected to when they have completed the checkout flow
     * @type {string}
     * @memberof ProductUpdatePlanAndCycleRequest
     */
    'redirectUrl'?: string;
    /**
     * Set up an email to receive alerts when a customer signs up for the plan
     * @type {string}
     * @memberof ProductUpdatePlanAndCycleRequest
     */
    'alertEmail'?: string;
}
