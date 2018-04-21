import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Occurence } from './../../store/plant/occurence.model';
import { Plant } from './../../store/plant/plant.model';
import { AppState } from './../../store/reducers';


@Component({
    templateUrl: './plant-details.component.html',
    styleUrls: ['./plant-details.component.css'],
})
export class PlantDetailsComponent {
    plant$: Observable<Plant>;
    occurences$: Observable<Occurence[]>;
    zoom = 2;

    constructor(private store: Store<AppState>) {
        this.plant$ = store.select(state => state.plantsState.currentPlant);
        this.occurences$ = store.select(state => state.plantsState.occurences);
    }
}
