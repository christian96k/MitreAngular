import { Component, input } from '@angular/core';
import { CardConfig } from '../../models/card.model';
import { TooltipDirective } from '../../directives/tooltip.directive';


/**
 * Array of modules used in the Card component.
 * @type {Array<Directive>}
 */
const CARD_DIRECTIVES = [
  TooltipDirective
]

/**
 * Represents a card component.
 */
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    ...CARD_DIRECTIVES
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
/**
 * Configuration for the card component.
 * @type {CardConfig}
 */
  public cardConfig = input.required<CardConfig>();


}
