import { JsonApiMeta } from '@hola/models/json-api-meta.interface'

export interface JsonApi {
  version: string;
  meta: JsonApiMeta;
}
