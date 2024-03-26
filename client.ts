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

import { AxiosRequestConfig } from "axios";
import {
  AddonApi,
  AllowanceApi,
  CreditnoteApi,
  CustomFieldApi,
  CustomerApi,
  InvoiceApi,
  ProductApi,
  SubscriptionApi,
} from "./api";
import { Configuration, ConfigurationParameters } from "./configuration";
import { BillsbyCustom } from "./client-custom";

export class Billsby extends BillsbyCustom {
  readonly addon: AddonApi;
  readonly allowance: AllowanceApi;
  readonly creditnote: CreditnoteApi;
  readonly customField: CustomFieldApi;
  readonly customer: CustomerApi;
  readonly invoice: InvoiceApi;
  readonly product: ProductApi;
  readonly subscription: SubscriptionApi;

  constructor(configurationParameters: ConfigurationParameters) {
    super(configurationParameters);
    const configuration = new Configuration(configurationParameters);
    this.addon = new AddonApi(configuration);
    this.allowance = new AllowanceApi(configuration);
    this.creditnote = new CreditnoteApi(configuration);
    this.customField = new CustomFieldApi(configuration);
    this.customer = new CustomerApi(configuration);
    this.invoice = new InvoiceApi(configuration);
    this.product = new ProductApi(configuration);
    this.subscription = new SubscriptionApi(configuration);
  }

}