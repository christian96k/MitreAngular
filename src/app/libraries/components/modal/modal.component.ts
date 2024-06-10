import { Component, Input, input } from '@angular/core';
import { ModalConfig } from '../../models/modal.model';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';


const UI_MODAL = [
  CardComponent
]

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    CommonModule,
    ...UI_MODAL
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  @Input() modalConfig:ModalConfig = {} as ModalConfig;

}
