import { Component, input } from '@angular/core';
import { TableConfig } from '../../models/table.model';
import { ChipComponent } from '../chip/chip.component';
import { CommonModule } from '@angular/common';

const UI_TABLE = [
  ChipComponent
]


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    ...UI_TABLE,
    CommonModule
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  public tableConfig = input.required<TableConfig>();
}
