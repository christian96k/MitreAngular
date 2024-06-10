import { MitreAttackInfo } from "../../../../shared/model/mitre.model";

/**
 * Represents extended information for a Mitre Attack.
 * Extends the base MitreAttackInfo type.
 * @typedef {MitreAttackInfo & {
*   techniques?: ExtendedMitreAttackInfo[];
*   subtechniques?: ExtendedMitreAttackInfo[];
*   uses?: MitreAttackInfo[];
* }} ExtendedMitreAttackInfo
*/
export type ExtendedMitreAttackInfo = MitreAttackInfo & {
 /**
  * Optional array of techniques associated with the Mitre Attack.
  * @type {ExtendedMitreAttackInfo[]}
  */
 techniques?: ExtendedMitreAttackInfo[];

 /**
  * Optional array of sub-techniques associated with the Mitre Attack.
  * @type {ExtendedMitreAttackInfo[]}
  */
 subtechniques?: ExtendedMitreAttackInfo[];

 /**
  * Optional array of uses associated with the Mitre Attack.
  * @type {MitreAttackInfo[]}
  */
 uses?: MitreAttackInfo[];
};
