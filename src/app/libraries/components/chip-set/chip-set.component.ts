import { Component, input } from '@angular/core';
import { ChipsetConfig } from '../../models/table.model';
import { ChipComponent } from '../chip/chip.component';
import { CommonModule } from '@angular/common';

const UI_CHIPSET = [
  ChipComponent
]


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
  public chipsetConfig = input.required<ChipsetConfig>();
}
