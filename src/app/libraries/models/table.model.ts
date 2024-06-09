import { ChipConfig } from "./chip.model";

export interface TableConfig {
  header: TableHeader[];
  content: TableContent[];
}

export interface TableHeader {
  class?:string;
  size: string;
  label: string;
}

export interface TableContent {
  class?:string;
  size: string;
  chips: ChipConfig[];
}
