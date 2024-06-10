import { ChipConfig } from "./chip.model";

export interface ChipsetConfig {
  /**
   * The header configuration for the chip set.
   * @type {ChipsetHeader[]}
   */
  header: ChipsetHeader[];

  /**
   * The content sections of the chip set.
   * @type {ChipsetContent[]}
   */
  content: ChipsetContent[];
}

/**
 * Configuration for the header of a chip set.
 */
export interface ChipsetHeader {
  /**
   * Optional CSS class for the header of the chip set.
   * @type {string}
   */
  class?: string;

  /**
   * The size of the header of the chip set.
   * @type {string}
   */
  size: string;

  /**
   * The label for the header of the chip set.
   * @type {string}
   */
  label: string;
}

/**
 * Configuration for the content section of a chip set.
 */
export interface ChipsetContent {
  /**
   * Optional CSS class for the content section of the chip set.
   * @type {string}
   */
  class?: string;

  /**
   * The size of the content section of the chip set.
   * @type {string}
   */
  size: string;

  /**
   * The chips configuration for the content section of the chip set.
   * @type {ChipConfig[]}
   */
  chips: ChipConfig[];
}
