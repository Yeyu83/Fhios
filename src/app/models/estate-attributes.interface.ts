import { EstateDescription } from '@hola/models'

export interface EstateAttributes {
  field_inmu_nume_habi: number;
  field_inmu_prec: string;
  field_inmu_refe: string;
  field_inmu_tipo_via: string;
  field_inmu_area_cons: string;
  field_inmu_imag_arra: string[];
  field_inmu_nomb_call: string;
  field_inmu_desc?: EstateDescription;
}
