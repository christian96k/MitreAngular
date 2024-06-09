export interface CardConfig{
  header:CardHeader;
  footer:CardFooter[];
}

export interface CardHeader {
  label: string;
  value: string;
  class?: string;
}

export interface CardFooter {
  icon: CardIcon;
  label?: string;
  actionType: CardAction;
  action: (actionType:CardAction)=> void;
}

export enum CardAction  {
  INFO ='info',
  SETTINGS ='info',
}

export enum CardIcon  {
  info = 'fa fa-info-circle',
  settings = 'fa fa-gear',
}
