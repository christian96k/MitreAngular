import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";
import { of } from "rxjs";
import { HubService } from "../services/hub.service";
import { filterMitreData, filterMitreDataSuccess, getMitreData, getMitreDataSuccess } from "./hub.actions";
import { HackerType } from "../../../../shared/constants/groupHackers.model";

/**
 * Effects class for the Hub module.
 * Handles side effects related to the Hub feature, such as fetching Mitre data.
 */
@Injectable()
export class HubEffects {

  /**
   * Initializes the HubEffects instance.
   * @param {Actions} actions$ Observable stream of actions dispatched in the application.
   * @param {HubService} hubService The service for interacting with the Hub feature.
   */
    constructor(private actions$: Actions, private hubService: HubService) {}

  /**
   * Effect triggered when a getMitreData action is dispatched.
   * Retrieves Mitre data from the service and dispatches a success action with the retrieved data.
   * @type {Observable<Action>}
   */
  public getMitreData = createEffect(() =>
    this.actions$.pipe(
      ofType(getMitreData),
      switchMap(({filter}) => {
        return this.hubService
          .getMitreData$()
          .pipe(
            map((response) => getMitreDataSuccess({
              mitreAttackData: filter === HackerType.GENERIC ?
              this.hubService.mapMitreData(response)
              : this.hubService.filterByActorRecursive(this.hubService.mapMitreData(response), filter), filter: filter }))
          );
      })
    )
  );

  /**
   * Effect triggered when a filterMitreData action is dispatched.
   * Dispatches a success action with the filtered Mitre data.
   * @type {Observable<Action>}
   */
  public filterMitreData = createEffect(() =>
    this.actions$.pipe(
      ofType(filterMitreData),
      switchMap(({ mitreAttackData, filter }) => of(filterMitreDataSuccess({ mitreAttackData, filter })))
    )
  );


}
