import { Component, input } from '@angular/core';
import { ChipConfig } from '../../models/chip.model';

@Component({
  selector: 'app-chip',
  standalone: true,
  imports: [],
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.scss'
})

/**
 * Component representing a chip.
 */
export class ChipComponent {
/**
 * Configuration for the chip component.
 * @type {ChipConfig}
 */
  public chipConfig = input.required<ChipConfig>();

}
