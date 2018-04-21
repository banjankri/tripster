import { Component, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import { AppState } from '../../store/reducers';
import * as UserActions from './../../store/user/user.actions';
import { User } from './../../store/user/user.model';
import * as RoutingActions from './../routing/routing.actions';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent implements OnDestroy {

    destroyed$: Subject<any> = new Subject<any>();

    user: User;
    user$: Observable<User>;

    constructor(
      private fb: FormBuilder,
      private store: Store<AppState>,
    ) {
      this.user$ = this.store.select(state => state.user.user);
      this.user$.takeUntil(this.destroyed$)
        .subscribe(user => { this.user = user; });
    }


    logout() {
      this.store.dispatch(new UserActions.Logout());
    }

    searchTerm($event): void {
      this.store.dispatch(
        new RoutingActions.Go({ path: ['/plants-list'], query: { query: $event.searchTerm }}));
    }

    ngOnDestroy() {
      this.destroyed$.next();
    }
}
