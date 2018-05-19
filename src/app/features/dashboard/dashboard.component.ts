import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../store/reducers';
import * as RoutingActions from './../routing/routing.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {

  constructor(
      private store: Store<AppState>,
    ) {
  }

  searchTerm($event): void {
    this.store.dispatch(
        new RoutingActions.Go({ path: ['/plants-list'], query: { query: $event.searchTerm } }));
  }
}
