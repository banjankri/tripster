import { Action } from '@ngrx/store';

import { Activity } from './activity.model';
import { ActivityActions, ActivityAction } from './activity.actions';

export interface ActivitiesState {
  activities: Activity[];
}

export const INITIAL_STATE: ActivitiesState = {
  activities: [],
};

export function activityReducer(storeState: ActivitiesState = INITIAL_STATE, action: ActivityAction)
    : ActivitiesState {

  switch (action.type) {
    case ActivityActions.ACTIVITIES_LOADED:
      return {
        ...storeState,
        activities: action.payload,
      };
    default:
      return storeState;
  }
}
