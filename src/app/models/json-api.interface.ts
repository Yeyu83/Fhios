import { JsonApiMeta } from '@hola/models'

export interface JsonApi {
  version: string;
  meta: JsonApiMeta;
}
