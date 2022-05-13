import { Link } from '@hola/models/link.interface'

export interface Links {
  self: Link;
  last?: Link;
  next?: Link;
}
