import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { User } from '@firebase/auth-types';
import { Store } from '@ngrx/store';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { MOBILE } from './constants';
import { LoginComponent } from './features/auth/login/login.component';
import { views } from './nav-views';
import { AppState } from './store/reducers';
import * as UserActions from './store/user/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app';

  mobile = MOBILE;
  sideNavMode = MOBILE ? 'over' : 'side';
  views = views;

  user$: Observable<User>;

  constructor(public dialog: MatDialog, private store: Store<AppState>, private af: AngularFireAuth, private router: Router) {
    this.af.authState.subscribe(this.loggedIn.bind(this));
  }

  private loggedIn(user: User) {
    if (user) {
      this.store.dispatch(new UserActions.LoginSuccess(user));
      this.router.navigate(['/account-details']);
    } else {
      this.store.dispatch(new UserActions.Logout());
    }
  }

  login() {
    this.dialog.open(LoginComponent, {
    });
  }

  logout() {
    this.store.dispatch(new UserActions.Logout());
  }

  ngOnInit(): void {
    this.user$ = this.store.select(state => state.user.user);
  }

}
