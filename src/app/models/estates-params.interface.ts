export interface EstateParams {
  'page[limit]': number;
  'page[offset]': number;
  'sort[weight][path]': string;
  'sort[weight][direction]': string;
  'sort[relevancy][path]': string;
  'sort[relevancy][direction]': string;
  'fields[node--inmuebles]': string;
  [key: string]: string | number | boolean | readonly (string | number | boolean)[];
}
