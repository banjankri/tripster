import { User } from '@firebase/auth-types';
import { UserActionTypes, UserActions } from './user.actions';

export interface UserState {
  user: User;
  loading: boolean;
  loaded: boolean;
  error: string;
}

export const INITIAL_STATE: UserState = {
  user: null,
  loading: false,
  loaded: true,
  error: null,
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

    case UserActionTypes.LogoutSuccess: {
      return {
        ...state,
        user: null,
      };
    }

    case UserActionTypes.LogoutFail: {
      return {
        ...state,
        error: 'Logout failed please try again',
      };
    }

    default: {
      return state;
    }
  }
}
