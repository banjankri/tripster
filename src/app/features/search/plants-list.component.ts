import * as RoutingActions from '../routing/routing.actions';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

import { PlantActions } from './../../store/plant/plant.actions';
import { AppState } from './../../store/reducers';
import { Plant } from './../../store/plant/plant.model';

@Component({
    templateUrl: './plants-list.component.html'
})
export class PlantsListComponent {
    plants$: Observable<Plant[]>;

    displayedColumns = [];

    constructor(private store: Store<AppState>, private plantActions: PlantActions) {
        this.plants$ = store.select(state => state.plantsState.plants);
    }

    plantSelected(plant: Plant, $event: Event) {
        this.store.dispatch(this.plantActions.plantSelected(plant));
        this.store.dispatch(new RoutingActions.Go({path: ['/details']}));

        $event.preventDefault();
    }
}
