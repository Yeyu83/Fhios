import {
  JsonApi, Estate, ApiResponseMeta, Links,
} from '@hola/models'

export interface ApiResponse {
  jsonapi: JsonApi;
  data: Estate[];
  meta: ApiResponseMeta;
  links: Links;
}
