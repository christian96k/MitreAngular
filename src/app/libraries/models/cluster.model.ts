import { ExtendedMitreAttackInfo } from "../../modules/deas/hub/models/hub.models";

export interface ClusterConfig {
  /**
   * Indicates whether the cluster is active.
   * @type {boolean}
   */
  active: boolean;

  /**
   * Indicates whether the cluster is opaque.
   * @type {boolean}
   */
  opaque: boolean;

  /**
   * The name of the cluster.
   * @type {string}
   */
  name: string;

  /**
   * The size of the cluster.
   * @type {number}
   */
  size: number;

  /**
   * Function to handle cluster selection.
   * @param {ClusterConfig} mitreInfo The Mitre Attack information for the selected cluster.
   * @returns {void}
   */
  select: (mitreInfo: ClusterConfig) => void;

  /**
   * The ID of the cluster.
   * @type {string}
   */
  id: string;

  /**
   * Optional array of techniques associated with the cluster.
   * @type {ExtendedMitreAttackInfo[]}
   */
  techniques?: ExtendedMitreAttackInfo[];

  /**
   * Optional array of uses associated with the cluster.
   * @type {ExtendedMitreAttackInfo[]}
   */
  uses?: ExtendedMitreAttackInfo[];

  /**
   * The external ID of the cluster.
   * @type {string}
   */
  externalID: string;
}
