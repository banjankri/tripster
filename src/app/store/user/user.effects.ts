/* tslint:disable: member-ordering */
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AngularFireAuth } from 'angularfire2/auth';
import { from, of } from 'rxjs';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
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
    .ofType(UserActionTypes.Logout).pipe(
    // .map((action: Logout) => action.payload)
    switchMap(() => from(this.af.auth.signOut()).pipe(
      mergeMap(res => of(
        new LogoutSuccess(res),
      ),
      ),
      catchError(err => of(
        new LogoutFail(err),
      )),
    )),
  );
}
