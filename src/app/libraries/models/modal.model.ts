import { CardConfig } from "./card.model";

export interface ModalConfig {
  /**
   * The title of the modal.
   * @type {string}
   */
  title: string;

  /**
   * The content sections of the modal.
   * @type {ModalContent[]}
   */
  content: ModalContent[];

  /**
   * The card configurations for the modal.
   * @type {CardConfig[]}
   */
  cards: CardConfig[];
}

/**
 * Content configuration for a modal component.
 */
export interface ModalContent {
  /**
   * The label for the content section.
   * @type {string}
   */
  label: string;

  /**
   * The value for the content section.
   * @type {string}
   */
  value: string;
}
