import { environment } from "./environments/environment.development"

export const GET_ALL_DETAILS = environment.domain +"/api/products"
export const GET_ALL_CATEGORY = environment.domain +"/api/category"
export const GET_BY_CATEGORY = environment.domain +"/api/products/categoryId/"
export const GET_PRODUCTS_BY_SEARCH = environment.domain +"/api/products/byName"
