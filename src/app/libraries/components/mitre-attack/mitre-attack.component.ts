import { Component } from '@angular/core';
import { ChipComponent } from '../chip/chip.component';
import { CardComponent } from '../card/card.component';
import { TableComponent } from '../table/table.component';
import { TableConfig } from '../../models/table.model';
import { ClusterComponent } from '../cluster/cluster.component';


const UI_MITRE_ATTACK = [
  ChipComponent,
  CardComponent,
  TableComponent,
  ClusterComponent
]

@Component({
  selector: 'app-mitre-attack',
  standalone: true,
  imports: [
    ...UI_MITRE_ATTACK
  ],
  templateUrl: './mitre-attack.component.html',
  styleUrl: './mitre-attack.component.scss'
})
export class MitreAttackComponent {


  public chipConfig = {label:'Identificato come attore malevolo', isDark:true, icon:'virus'}


  public tableConfig:TableConfig = {
    header:[
      {
        label: 'Nome',
        size:'col-4 col-lg-1'
      },
      {
        label: 'ID Esterno',
        size:'col-4 col-lg-1'

      },
      {
        label: 'Alias',
        size:'col-4 col-lg-10'
      }
    ],
    content:[
      {
        size:'col-4 col-lg-1',
        chips:[
          {
            label: 'APT28',
            isDark: true,
          }
        ]
      },
      {
        size:'col-4 col-lg-1',
        chips:[
          {
            label: 'G0007',
            isDark: true,
          }
        ]
      },
      {
        size:'col-4 col-lg-10',
        class: 'd-lg-flex gap-12',
        chips:[
          {
            label: 'Iron Twilight-1',
            class: 'my-2 my-lg-0'
          },
          {
            label: 'Iron Twilight-2',
            class: 'my-2 my-lg-0'
          },
          {
            label: 'Iron Twilight-3',
            class: 'my-2 my-lg-0'
          },
          {
            label: 'Iron Twilight-4',
            class: 'my-2 my-lg-0'
          },
          {
            label: 'Iron Twilight-5',
            class: 'my-2 my-lg-0'
          }
        ]
      },

    ]
  }


}
