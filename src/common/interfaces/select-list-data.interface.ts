export type SelectListValue = string | number;

export interface SelectOptionDataItem {
  title: string;
  value: SelectListValue;
}

export interface SelectListData {
  defaultValue: SelectListValue;
  items: SelectOptionDataItem[];
}
