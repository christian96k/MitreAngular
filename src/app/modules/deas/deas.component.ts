import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../../core/modules/user/models/user.model';
import { UserFacade } from '../../core/modules/user/store/user.facade';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const MODULES_CORE_DEAS = [
  RouterModule,
  CommonModule
]



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
