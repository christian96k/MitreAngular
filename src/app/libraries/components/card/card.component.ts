import { Component, input } from '@angular/core';
import { CardConfig } from '../../models/card.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  public cardConfig = input.required<CardConfig>();


}
