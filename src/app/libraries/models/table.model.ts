import { ChipConfig } from "./chip.model";

export interface ChipsetConfig {
  header: ChipsetHeader[];
  content: ChipsetContent[];
}

export interface ChipsetHeader {
  class?:string;
  size: string;
  label: string;
}

export interface ChipsetContent {
  class?:string;
  size: string;
  chips: ChipConfig[];
}
