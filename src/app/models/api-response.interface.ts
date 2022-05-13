import { ApiResponseMeta } from '@hola/models/api-response-meta.interface'
import { Estate } from '@hola/models/estate.interface'
import { JsonApi } from '@hola/models/json-api.interface'
import { Links } from '@hola/models/links.interface'

export interface ApiResponse {
  jsonapi: JsonApi;
  data: Estate[];
  meta: ApiResponseMeta;
  links: Links;
}
