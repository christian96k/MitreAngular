import { Component, Input, input } from '@angular/core';
import { ModalConfig } from '../../models/modal.model';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';


/**
 * Array containing UI modal components.
 * @type {typeof CardComponent[]}
 */
const UI_MODAL: typeof CardComponent[] = [
  CardComponent
];

/**
 * Component representing a modal.
 */
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
  /**
   * Configuration for the modal component.
   * @type {ModalConfig}
   */
  @Input() modalConfig:ModalConfig = {} as ModalConfig;

}
