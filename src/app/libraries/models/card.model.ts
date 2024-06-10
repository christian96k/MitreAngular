/**
 * Configuration for a card component.
 */
export interface CardConfig {
  /**
   * The header configuration for the card.
   * @type {CardHeader}
   */
  header: CardHeader;

  /**
   * The footer configuration for the card.
   * @type {CardFooter[]}
   */
  footer: CardFooter[];
}

/**
 * Configuration for the header of a card component.
 */
export interface CardHeader {
  /**
   * The label for the card header.
   * @type {string}
   */
  label: string;

  /**
   * The value for the card header.
   * @type {string}
   */
  value: string;

  /**
   * Optional CSS class for the card header.
   * @type {string}
   */
  class?: string;
}

/**
 * Configuration for the footer of a card component.
 */
export interface CardFooter {
  /**
   * The icon for the card footer.
   * @type {CardIcon}
   */
  icon: CardIcon;

  /**
   * Optional label for the card footer.
   * @type {string}
   */
  label?: string;

  /**
   * The type of action for the card footer.
   * @type {CardAction}
   */
  actionType: CardAction;

  /**
   * The action to be executed when the card footer is interacted with.
   * @type {(actionType: CardAction) => void}
   */
  action: (actionType: CardAction) => void;
}

/**
 * Enum representing different actions for a card component.
 */
export enum CardAction {
  INFO = 'info',
  SETTINGS = 'settings',
}

/**
 * Enum representing different icons for a card component.
 */
export enum CardIcon {
  info = 'icon-info',
  settings = 'icon-settings',
  vrius = 'icon-virus',
}
