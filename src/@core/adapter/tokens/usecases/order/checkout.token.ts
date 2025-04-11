import { InjectionToken } from "@angular/core";
import { CheckoutInput } from "../../../../application/inputs/product/checkout.input";

export const CHECKOUT_TOKEN = new InjectionToken<CheckoutInput>('CHECKOUT_TOKEN');
