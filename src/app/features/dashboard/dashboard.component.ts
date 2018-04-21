import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/takeUntil';
import { Store } from '@ngrx/store';

import { PlantActions } from './../../store/plant/plant.actions';
import { User } from './../../store/user/user.model';
import { AppState } from '../../store/reducers';
import { Go } from '../routing/routing.actions';

import * as UserActions from './../../store/user/user.actions';
import * as RoutingActions from './../routing/routing.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent implements OnDestroy, OnInit {

    destroyed$: Subject<any> = new Subject<any>();
    form: FormGroup;
    nameLabel = 'Enter your name';
    testSub$: Observable<string>;
    user: User;
    user$: Observable<User>;

    constructor(
      private fb: FormBuilder,
      private store: Store<AppState>,
    ) {
      this.form = fb.group({
        name: ''
      });
      this.user$ = this.store.select(state => state.user.user);
      this.user$.takeUntil(this.destroyed$)
        .subscribe(user => { this.user = user; });
    }

    ngOnInit() {
      this.form.get('name').setValue(this.user.name);
    }

    clearName() {
    this.store.dispatch(new UserActions.EditUser(
        Object.assign({}, this.user, { name: '' }
        )));

      this.form.get('name').setValue('');
    }

    logout() {
    this.store.dispatch(new UserActions.Logout());
    }

    submitState() {
    this.store.dispatch(new UserActions.EditUser(
        Object.assign({}, this.user, { name: this.form.get('name').value }
        )));
    }

    public searchTerm($event): void {
      this.store.dispatch(
        new RoutingActions.Go({ path: ['/plants-list'], query: { query: $event.searchTerm }}));
    }

    ngOnDestroy() {
      this.destroyed$.next();
    }
}
