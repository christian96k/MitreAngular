import { Component, input } from '@angular/core';
import { ClusterConfig } from '../../models/cluster.model';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from '../../directives/tooltip.directive';

/**
 * Array containing cluster directives.
 * @type {typeof TooltipDirective[]}
 */
const CLUSTER_DIRECTIVES: typeof TooltipDirective[] = [
  TooltipDirective
];

/**
 * Component representing a cluster.
 */
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
/**
 * Configuration for the cluster component.
 * @type {ClusterConfig}
 */
  public clusterConfig = input.required<ClusterConfig>();

}
