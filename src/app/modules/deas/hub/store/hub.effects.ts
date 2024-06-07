import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs";
import { HubService } from "../services/hub.service";
import { getMitreData, getMitreDataSuccess } from "./hub.actions";

/**
 * Effects class for the Hub module.
 * Handles side effects related to the Hub feature, such as polling projects.
 */
@Injectable()
export class HubEffects {

  constructor(
    private actions$: Actions,
    private hubService: HubService
  ) {}

  public getMitreData = createEffect(() =>
    this.actions$.pipe(
      ofType(getMitreData),
      switchMap(() => {
        return this.hubService
          .getMitreData$()
          .pipe(
            map((response) => getMitreDataSuccess({mitreAttackData: response}))
          );
      })
    )
  );

}
