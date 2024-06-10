import { CardConfig } from "./card.model";

export interface ModalConfig {
  title: string;
  content: ModalContent[];
  cards:CardConfig[];
}

export interface ModalContent{
  label: string;
  value: string;
}
