import { InjectionToken } from "@angular/core";
import { GetProductUseCase } from "../../../../application/usecases/product/get.usecase";

export const GET_PRODUCT_USE_CASE_TOKEN = new InjectionToken<GetProductUseCase>('GetProductUseCaseToken');