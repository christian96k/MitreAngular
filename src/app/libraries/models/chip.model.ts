export interface ChipConfig {
  /**
   * The label for the chip.
   * @type {string}
   */
  label: string;

  /**
   * Optional CSS class for the chip.
   * @type {string}
   */
  class?: string;

  /**
   * Optional flag indicating whether the chip has a dark theme.
   * @type {boolean}
   */
  isDark?: boolean;

  /**
   * Optional icon for the chip.
   * @type {string}
   */
  icon?: string;

  /**
   * Optional CSS class for the chip icon.
   * @type {string}
   */
  classIcon?: string;
}
