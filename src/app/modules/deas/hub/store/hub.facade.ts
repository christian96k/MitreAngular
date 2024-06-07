import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { getMitreData } from "./hub.actions";
import { mitreData$ } from "./hub.selectors";


@Injectable()
export class HubFacade {

  constructor(private store: Store) {}

  public mitreData$ = this.store.select(mitreData$);

  public getMitreData(): void {
    this.store.dispatch(getMitreData());
  }

}
