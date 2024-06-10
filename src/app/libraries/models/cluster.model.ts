import { ExtendedMitreAttackInfo } from "../../modules/deas/hub/models/hub.models";

export interface ClusterConfig{
  active: boolean;
  opaque: boolean;
  name:string;
  size:number;
  select: (mitreInfo:ClusterConfig)=> void;
  id: string;
  techniques?: ExtendedMitreAttackInfo[];
  uses?: ExtendedMitreAttackInfo[];
  externalID: string;
}

