import { ParsedUrlQuery } from "querystring"

export interface Option {
    value: string
    label: string
}

export interface Params extends ParsedUrlQuery {
    id: string
}