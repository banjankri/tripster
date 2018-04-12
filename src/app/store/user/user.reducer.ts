/* tslint:disable: no-switch-case-fall-through */
import { Action } from '@ngrx/store';

import { UserActions, UserActionTypes } from './user.actions';
import { User } from './user.model';

export interface UserState {
  user: User;
  loading: boolean;
  loaded: boolean;
}

export const INITIAL_STATE: UserState = {
  user: { name: 'Angular User' },
  loading: false,
  loaded: true,
};

export function userReducer(state = INITIAL_STATE, action: UserActions): UserState {
  switch (action.type) {

    case UserActionTypes.EditUser: {
      return {
        ...state,
        user: action.payload
      };
    }

    default: {
      return state;
    }
  }
}
