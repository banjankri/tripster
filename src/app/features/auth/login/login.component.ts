import * as UserActions from './../../../store/user/user.actions';
import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { moveIn } from '../../../router.animations';
import * as firebaseApp from 'firebase/app';
import { User } from '@firebase/auth-types';
import { AppState } from '../../../store/reducers';
import { Store } from '@ngrx/store';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    error: any;

    constructor(public af: AngularFireAuth, private router: Router, private store: Store<AppState>) {
    }

    loginFb() {
        this.af.auth.signInWithPopup(new firebaseApp.auth.FacebookAuthProvider()).then(this.loginSuccess.bind(this)).catch(
            this.loginFailed.bind(this));
      }

      loginGoogle() {
        this.af.auth.signInWithPopup(new firebaseApp.auth.GoogleAuthProvider()).then(this.loginSuccess.bind(this)).catch(
            this.loginFailed.bind(this));
      }

      private loggedIn(user: User) {
          if (user) {
            this.store.dispatch(new UserActions.LoginSuccess(user));
            this.router.navigate(['/account-details']);
          }
      }

      private loginSuccess(success) {
          this.loggedIn(success.user);
      }

      private loginFailed(err) {
        this.error = err;
      }
}
