export interface MaterialsParams {
  sort: string;
  start: string;
  end: string;
}

export interface MaterialsRes {
  name: string;
  category: string;
  parent: string;
  material_id: number;
  color: IColor | null;
  code: string;
  last_price: number;
  min_amount: number;
  unit: string;
  width: string;
  remind_start_amount: number;
  remind_start_sum: number;
  remind_income_amount: number;
  remind_income_sum: number;
  remind_outgo_amount: number;
  remind_outgo_sum: number;
  remind_end_amount: number;
  remind_end_sum: number;
}

export interface IColor {
  colors_id: number;
  name: string;
  color: string;
  is_deleted: null;
  deleted_at: null;
  created_at: number;
  updated_at: number;
  pantone: string;
}
