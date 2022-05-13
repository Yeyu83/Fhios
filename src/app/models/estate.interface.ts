import { Links } from '@hola/models/links.interface'
import { EstateAttributes } from '@hola/models/estate-attributes.interface'

export interface Estate {
  type: string;
  id: string;
  links: Links;
  attributes: EstateAttributes;
}
