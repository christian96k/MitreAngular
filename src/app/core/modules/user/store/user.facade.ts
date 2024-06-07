import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { user$ } from "./user.selectors";
import { filter, Observable } from "rxjs";
import { login } from "./user.actions";
import { UserModel } from "../models/user.model";


@Injectable({ providedIn: 'root' })
export class UserFacade {
  public user$: Observable<UserModel> = this.store.select(user$).pipe(filter(Boolean));

  constructor(private store: Store) {}


  public login(user: UserModel): void {
    this.store.dispatch(login({ user }));
  }
}
