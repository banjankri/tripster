import { StoreModule, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { Params, RouterStateSnapshot } from '@angular/router';
import { PlantsState } from './../plant/plant.reducer';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { routerReducer, RouterReducerState, RouterStateSerializer } from '@ngrx/router-store';

import * as fromUser from '../user/user.reducer';
import * as activities from '../activity/activity.reducer';
import * as plants from '../plant/plant.reducer';

export interface RouterStateUrl {
  url: string;
  params?: Params;
  queryParams?: Params;
}

const modules = {
  'router': routerReducer,
  'user': fromUser.userReducer,
  'activitiesState': activities,
  'plantsState': plants
};

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
  user: fromUser.UserState;
  activitiesState: activities.ActivitiesState;
  plantsState: plants.PlantsState;
}

export const syncReducers = {
  router: routerReducer,
  user: fromUser.userReducer,
  activitiesState: activities.activityReducer,
  plantsState: plants.plantReducer
};

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;
    while (route.firstChild) {
      route = route.firstChild;
    }

    const { url } = routerState;
    const queryParams = routerState.root.queryParams;
    const params = route.params;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return { url, params, queryParams };
  }
}


const deepCombineReducers = (allReducers: any) => {
  Object.getOwnPropertyNames(allReducers).forEach((prop) => {
    if (allReducers.hasOwnProperty(prop)
      && allReducers[prop] !== null
      && typeof allReducers[prop] !== 'function') {
      allReducers[prop] = deepCombineReducers(allReducers[prop]);
    }
  });
  return combineReducers(allReducers);
};

const createReducer = (asyncReducers = {}) => {
  let allReducers = { ...syncReducers, ...asyncReducers };
  return deepCombineReducers(allReducers);
};

// Generate a reducer to set the root state in dev mode for HMR
function stateSetter(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state: any, action: any) {
    if (action.type === 'SET_ROOT_STATE') {
      return action.payload;
    }
    return reducer(state, action);
  };
}

function logout(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function(state: AppState, action: any): AppState {
    if (action.type === '[User] Logout Success') {
      state = undefined;
    }
    return reducer(state, action);
  };
}

export function resetOnLogout (reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function (state, action) {
    let newState;
    if (action.type === '[User] Logout Success') {
      newState = Object.assign({}, state);
      Object.keys(modules).forEach((key) => {
        newState[key] = modules[key]['initialState'];
      });
    }
    return reducer(newState || state, action);
  };
}

export const DEV_REDUCERS: MetaReducer<AppState>[] = [stateSetter, storeFreeze];

