import { Component, input } from '@angular/core';
import { ChipConfig } from '../../models/chip.model';

@Component({
  selector: 'app-chip',
  standalone: true,
  imports: [],
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.scss'
})
export class ChipComponent {
  public chipConfig = input.required<ChipConfig>();

}
