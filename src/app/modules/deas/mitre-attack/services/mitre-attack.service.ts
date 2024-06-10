import { inject, Injectable } from "@angular/core";
import { CardAction, CardConfig, CardIcon } from "../../../../libraries/models/card.model";
import { ModalComponent } from "../../../../libraries/components/modal/modal.component";
import { ModalConfig } from "../../../../libraries/models/modal.model";
import { ExtendedMitreAttackInfo } from "../../hub/models/hub.models";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClusterConfig } from "../../../../libraries/models/cluster.model";
import { MitreAttackComponent } from "../mitre-attack.component";

/**
 * Service for handling Mitre Attack related operations.
 * @@Injectable
 * @providedIn: 'root'
 */
@Injectable({
  providedIn: 'root'
})
export class MitreAttackService {

  /**
   * Injected service for managing modals.
   * @private
   */
  private modalService = inject(NgbModal);

  /**
   * Creates a cluster configuration for a Mitre Attack.
   * @param {ExtendedMitreAttackInfo} mitreAttackInfo The Mitre Attack information.
   * @param {MitreAttackComponent} mitreComponent The Mitre Attack component.
   * @returns {ClusterConfig} The cluster configuration.
   */
  public createMitreCluster(mitreAttackInfo: ExtendedMitreAttackInfo, mitreComponent: MitreAttackComponent): ClusterConfig {
    return {
      name: mitreAttackInfo.name,
      id: mitreAttackInfo.id,
      active: false,
      select: (mitreInfo: ClusterConfig) => mitreComponent.selectMitreCluster(mitreInfo, mitreComponent),
      techniques: mitreAttackInfo.techniques,
      uses: mitreAttackInfo.uses,
      externalID: mitreAttackInfo.external_references[0].external_id,
      opaque: false,
      size: 7
    };
  }

  /**
   * Creates a card configuration for Mitre Attack techniques.
   * @param {ExtendedMitreAttackInfo} mitreAttackInfo The Mitre Attack information.
   * @param {MitreAttackComponent} mitreComponent The Mitre Attack component.
   * @returns {CardConfig} The card configuration.
   */
  public createMitreTechniques(mitreAttackInfo: ExtendedMitreAttackInfo, mitreComponent: MitreAttackComponent): CardConfig {
    return {
      header: {
        label: mitreAttackInfo.name,
        value: mitreAttackInfo.external_references[0].external_id,
      },
      footer: [
        {
          icon: CardIcon.info,
          actionType: CardAction.INFO,
          action: (actionType: CardAction) => this.openMitreModal(actionType, mitreAttackInfo, mitreComponent)
        },
        {
          icon: CardIcon.settings,
          actionType: CardAction.SETTINGS,
          action: (actionType: CardAction) => this.openMitreModal(actionType, mitreAttackInfo, mitreComponent)
        }
      ]
    };
  }

  /**
   * Opens a modal for Mitre Attack information.
   * @param {CardAction} actionType The type of action (INFO or SETTINGS).
   * @param {ExtendedMitreAttackInfo} mitreAttackInfo The Mitre Attack information.
   * @param {MitreAttackComponent} mitreComponent The Mitre Attack component.
   */
  public openMitreModal(actionType: CardAction, mitreAttackInfo: ExtendedMitreAttackInfo, mitreComponent: MitreAttackComponent): void {
    let modalConfig: ModalConfig;
    switch (actionType) {
      case CardAction.INFO:
        modalConfig = {
          title: 'Informazioni',
          content: [
            {
              label: 'Name',
              value: mitreAttackInfo.name,
            },
            {
              label: 'ID',
              value: mitreAttackInfo.id,
            },
            {
              label: 'External ID',
              value: mitreAttackInfo.external_references[0].external_id,
            },
            {
              label: 'Descrizione',
              value: mitreAttackInfo.description,
            },
            {
              label: 'Uses',
              value: mitreAttackInfo?.uses ? mitreAttackInfo?.uses[0]?.description : 'N/A',
            }
          ],
          cards: mitreAttackInfo?.subtechniques ? mitreAttackInfo.subtechniques.map(subtechnique => this.createMitreTechniques(subtechnique, mitreComponent)) : []
        };
        const modalRef = this.modalService.open(ModalComponent, { size: 'lg', centered: true });
        modalRef.componentInstance.modalConfig = modalConfig;
        break;
      default:
        null;
    }
  }

}
