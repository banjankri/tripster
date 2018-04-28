/* tslint:disable: member-ordering */
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../reducers';
import { LogoutFail, LogoutSuccess, UserActionTypes } from './user.actions';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private af: AngularFireAuth,
  ) { }

  @Effect() logout$ = this.actions$
    .ofType(UserActionTypes.Logout)
    // .map((action: Logout) => action.payload)
    .switchMap(() => Observable.fromPromise(this.af.auth.signOut())
      .mergeMap((res) => Observable.of(
        new LogoutSuccess(res),
      ),
      )
      .catch((err) => Observable.of(
        new LogoutFail(err),
      )),
    );
}
