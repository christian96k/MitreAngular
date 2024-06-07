import { createAction, props } from "@ngrx/store";
import { MitreAttackData } from "../../../../shared/model/mitre.model";


export const getMitreData = createAction('[Get Mitre Data] Get Mitre Data', props);
export const getMitreDataSuccess = createAction('[Get Mitre Data Success] Get Mitre Data success', props<{ mitreAttackData: MitreAttackData }>());

