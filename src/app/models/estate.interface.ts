import { EstateAttributes, Links } from '@hola/models'

export interface Estate {
  type: string;
  id: string;
  links: Links;
  attributes: EstateAttributes;
}
