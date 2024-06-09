import { Component, input } from '@angular/core';
import { ClusterConfig } from '../../models/cluster.model';
import { CommonModule } from '@angular/common';
import { ExtendedMitreAttackInfo } from '../../../modules/deas/hub/models/hub.models';
import { TooltipDirective } from '../../directives/tooltip.directive';

const CLUSTER_DIRECTIVES = [
  TooltipDirective
]

@Component({
  selector: 'app-cluster',
  standalone: true,
  imports: [
    CommonModule,
    ...CLUSTER_DIRECTIVES
  ],
  templateUrl: './cluster.component.html',
  styleUrl: './cluster.component.scss'
})
export class ClusterComponent {
  public clusterConfig = input.required<ClusterConfig>();

}
