/* tslint:disable: member-ordering */

import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import { Activity } from './activity.model';
import { ActivityService } from './activity.service';
import { ActivityActions, ActivityAction } from './activity.actions';

@Injectable()
export class ActivityEffects {
  constructor(
        private actions$: Actions,
        private activityService: ActivityService,
        private activityActions: ActivityActions,
    ) {

  }

  @Effect() search = this.actions$.ofType<ActivityAction>(ActivityActions.SEARCH)
        .map(action => action.payload)
        .switchMap(searchTerm => this.activityService.search(searchTerm))
        .map(activities => {
          return this.activityActions.activitiesLoaded(activities);
        });
}
