import { Component, input } from '@angular/core';
import { ChipsetConfig } from '../../models/chipset.model';
import { ChipComponent } from '../chip/chip.component';
import { CommonModule } from '@angular/common';

/**
 * Array containing UI chipset components.
 * @type {typeof ChipComponent[]}
 */
const UI_CHIPSET: typeof ChipComponent[] = [
  ChipComponent
];

/**
 * Component representing a set of chips.
 */
@Component({
  selector: 'app-chip-set',
  standalone: true,
  imports: [
    ...UI_CHIPSET,
    CommonModule
  ],
  templateUrl: './chip-set.component.html',
  styleUrl: './chip-set.scss'
})
export class ChipsetComponent {
  /**
   * Configuration for the chipset component.
   * @type {ChipsetConfig}
   */
  public chipsetConfig = input.required<ChipsetConfig>();
}
