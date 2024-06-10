import { Component, input } from '@angular/core';
import { CardConfig } from '../../models/card.model';
import { TooltipDirective } from '../../directives/tooltip.directive';

const CARD_DIRECTIVES = [
  TooltipDirective
]
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

  public cardConfig = input.required<CardConfig>();


}
