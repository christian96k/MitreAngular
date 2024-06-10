import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
/**
 * Array of modules used in the Deas component.
 * @type {Array<Modules>}
 */
const MODULES_CORE_DEAS = [
  RouterModule,
  CommonModule
]


/**
 * Represents the DeasComponent class.
 * This component is responsible for rendering the Deas view.
 */
@Component({
  selector: 'app-deas',
  standalone: true,
  imports: [
    ...MODULES_CORE_DEAS
  ],
  templateUrl: './deas.component.html',
  styleUrl: './deas.component.scss'
})
export class DeasComponent {

}
