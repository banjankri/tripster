import { User } from '@firebase/auth-types';
import { Action } from '@ngrx/store';

export enum UserActionTypes {
  EditUser = '[User] Edit User',
  Logout = '[User] Logout',
  LogoutFail = '[User] Logout Fail',
  LogoutSuccess = '[User] Logout Success',
  LoginSuccess = '[User] Login Success',
}

export class EditUser implements Action {
  readonly type = UserActionTypes.EditUser;

  constructor(public payload: User) { }
}

export class Logout implements Action {
  readonly type = UserActionTypes.Logout;
}

export class LogoutFail implements Action {
  readonly type = UserActionTypes.LogoutFail;

  constructor(public payload: Error) { }
}

export class LogoutSuccess implements Action {
  readonly type = UserActionTypes.LogoutSuccess;

  constructor(public payload: Response | string) { }
}

export class LoginSuccess implements Action {
  readonly type = UserActionTypes.LoginSuccess;

  constructor(public payload: User) { }
}

export type UserActions =
  | EditUser
  | Logout
  | LogoutFail
  | LogoutSuccess
  | LoginSuccess;

