import { MitreAttackInfo } from "../../../../shared/model/mitre.model";

export type ExtendedMitreAttackInfo = MitreAttackInfo & {
  techniques?: ExtendedMitreAttackInfo[];
  subtechniques?: ExtendedMitreAttackInfo[];
  uses?: MitreAttackInfo[];
};
