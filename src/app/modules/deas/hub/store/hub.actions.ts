import { createAction, props } from "@ngrx/store";
import { MitreAttackData } from "../../../../shared/model/mitre.model";
import { ExtendedMitreAttackInfo } from "../models/hub.models";


export const getMitreData = createAction('[Get Mitre Data] Get Mitre Data', props);
export const getMitreDataSuccess = createAction('[Get Mitre Data Success] Get Mitre Data success', props<{ mitreAttackData: ExtendedMitreAttackInfo[] }>());

