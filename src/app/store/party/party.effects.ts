/* tslint:disable: member-ordering */

import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import { PartyService } from './party.service';
import { PartyActions, PartyAction } from './party.actions';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class PartyEffect {
  constructor(
        private actions$: Actions,
        private plantService: PartyService,
        private plantActions: PartyActions,
    ) {

  }

  @Effect() search = this.actions$.ofType<PartyAction>(PartyActions.UPCOMING).pipe(
        map(action => action.payload),
        switchMap(amount => this.plantService.loadNUpcomingParties(amount)),
        map(parties => this.plantActions.partiesLoaded(parties)),
  );
}
