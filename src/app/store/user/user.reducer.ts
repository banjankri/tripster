/* tslint:disable: no-switch-case-fall-through */
import { Action } from '@ngrx/store';

import { UserActions, UserActionTypes } from './user.actions';
import { User } from '@firebase/auth-types';

export interface UserState {
  user: User;
  loading: boolean;
  loaded: boolean;
}

export const INITIAL_STATE: UserState = {
  user: null,
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

    case UserActionTypes.LoginSuccess: {
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
