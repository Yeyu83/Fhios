export interface Estate {
  type: string;
  id: string;
  links: EstateLinks;
  attributes: Attributes;
  relationships?: Relationships;
}

export interface Attributes {
  field_inmu_nume_habi: number;
  field_inmu_prec: string;
  field_inmu_refe: string;
  field_inmu_tipo_via: string;
  field_inmu_area_cons: string;
  field_inmu_imag_arra: string[];
  field_inmu_nomb_call: string;
  drupal_internal__nid?: number;
  drupal_internal__vid?: number;
  langcode?: string;
  revision_timestamp?: Date;
  revision_log?: null;
  status?: boolean;
  title?: string;
  created?: Date;
  changed?: Date;
  promote?: boolean;
  sticky?: boolean;
  default_langcode?: boolean;
  revision_translation_affected?: boolean;
  path?: Path;
  content_translation_source?: string;
  content_translation_outdated?: boolean;
  field_inmu_nume_dorm?: number;
  field_inmu_nume_gara?: number;
  field_inmu_nume_tras?: number;
  field_inmu_orig?: string;
  field_inmu_pert_alis?: boolean;
  field_inmu_peso_orde?: number;
  field_inmu_pisc?: boolean;
  field_inmu_pisc_comu?: boolean;
  field_inmu_prec_orig?: string;
  field_inmu_prov?: string;
  field_inmu_reservation_allowed?: boolean;
  field_inmu_subt?: string;
  field_inmu_supe?: string;
  field_inmu_terr?: boolean;
  field_inmu_tipo?: string;
  field_inmu_tipo_sin_agru?: string;
  field_inmu_titl?: string;
  field_inmu_tras?: boolean;
  field_inmu_url_pdf?: string;
  field_inmu_vinc?: any[];
  has_floorfy?: boolean;
  pre_reserva?: boolean;
  relevancy?: number;
  reservado_online?: boolean;
  videocall?: boolean;
  boosted?: boolean;
  field_inmu_acti_camp?: string;
  field_inmu_aire?: boolean;
  field_inmu_asce?: boolean;
  field_inmu_cale?: boolean;
  field_inmu_camp_iden?: string[];
  field_inmu_clas_ener_letr?: string;
  field_inmu_clas_ener_url?: FieldInmuClasEnerURL;
  field_inmu_code?: string;
  field_inmu_code_post?: string;
  field_inmu_code_prom?: string;
  field_inmu_deco_view_url?: null;
  field_inmu_desc?: FieldInmuDesc;
  field_inmu_dire?: string;
  field_inmu_esta?: number;
  field_inmu_esta_desc?: string;
  field_inmu_gara?: boolean;
  field_inmu_id?: string;
  field_inmu_imag_zona_arra?: string[];
  field_inmu_lati?: number;
  field_inmu_long?: number;
  field_inmu_nume_bano?: number;
  field_inmu_nume_call?: number;
}

export interface FieldInmuClasEnerURL {
  uri: string;
  title: null;
  options: any[];
}

export interface FieldInmuDesc {
  value: string;
  format: null;
  processed: string;
}

export interface Path {
  alias: null;
  pid: null;
  langcode: string;
}

export interface Self {
  href: string;
}

export interface Relationships {
  node_type: NodeType;
  revision_uid: District;
  uid: District;
  municipality: District;
  province: District;
  tipology: District;
  district: District;
}

export interface District {
  data: Data | null;
  links: DistrictLinks;
}

export interface Data {
  type: string;
  id: string;
}

export interface DistrictLinks {
  related: Self;
  self: Self;
}

export interface NodeType {
  data: null;
  links: EstateLinks;
}

export interface ApiResponse {
  jsonapi: Jsonapi;
  data: Estate[];
  meta: EstateMeta;
  links: EstateLinks;
}

export interface JsonApiLinks {
  self: Last;
}

export interface Last {
  href: string;
}

export enum Type {
  NodeInmuebles = 'node--inmuebles',
}

export interface Jsonapi {
  version: string;
  meta: JsonapiMeta;
}

export interface JsonapiMeta {
  links: JsonApiLinks;
}

export interface EstateLinks {
  last: Last;
  next: Last;
  self: Last;
}

export interface EstateMeta {
  count: string;
}
