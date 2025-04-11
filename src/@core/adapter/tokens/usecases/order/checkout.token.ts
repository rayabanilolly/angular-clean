import { InjectionToken } from "@angular/core";
import { OrderInput } from "../../../../application/inputs/order.input";

export const CHECKOUT_TOKEN = new InjectionToken<OrderInput>('CHECKOUT_TOKEN');
