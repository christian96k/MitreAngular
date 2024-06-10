import { createAction, props } from "@ngrx/store";
import { MitreAttackData } from "../../../../shared/model/mitre.model";
import { ExtendedMitreAttackInfo } from "../models/hub.models";
import { HackerType } from "../../../../shared/constants/groupHackers.model";


export const getMitreData = createAction('[Get Mitre Data] Get Mitre Data', props);
export const getMitreDataSuccess = createAction('[Get Mitre Data Success] Get Mitre Data success', props<{ mitreAttackData: ExtendedMitreAttackInfo[] }>());

export const filterMitreData = createAction('[Filter Mitre Data] Filter Mitre Data', props<{ mitreAttackData: ExtendedMitreAttackInfo[],filter:HackerType }>());
export const filterMitreDataSuccess = createAction('[Filter Mitre Data Success] Filter Mitre Data success', props<{ mitreAttackData: ExtendedMitreAttackInfo[], filter:HackerType }>());


