import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { filterMitreData, getMitreData } from "./hub.actions";
import { mitreData$, mitreDataFilter$ } from "./hub.selectors";
import { ExtendedMitreAttackInfo } from "../models/hub.models";
import { HackerType } from "../../../../shared/constants/groupHackers.model";


@Injectable()
export class HubFacade {

  constructor(private store: Store) {}

  public mitreData$ = this.store.select(mitreData$);
  public mitreDataFilter$ = this.store.select(mitreDataFilter$);


  public getMitreData(): void {
    this.store.dispatch(getMitreData());
  }

  public filtreMitreData(mitreAttackData:ExtendedMitreAttackInfo[], filter:HackerType): void {
    this.store.dispatch(filterMitreData({mitreAttackData, filter}));
  }

}
