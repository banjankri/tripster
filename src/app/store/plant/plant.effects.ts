/* tslint:disable: member-ordering */

import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import { PlantService } from './plant.service';
import { PlantActions, PlantAction } from './plant.actions';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class PlantEffects {
  constructor(
        private actions$: Actions,
        private plantService: PlantService,
        private plantActions: PlantActions,
    ) {

  }

  @Effect() search = this.actions$.ofType<PlantAction>(PlantActions.SEARCH).pipe(
        map(action => action.payload),
        switchMap(searchTerm => this.plantService.search(searchTerm)),
        map(activities => this.plantActions.plantsLoaded(activities)),
  );

  @Effect() details = this.actions$.ofType<PlantAction>(PlantActions.PLANT_SELECTED).pipe(
        map(action => action.payload),
        switchMap(plant => this.plantService.plantOccurences(plant)),
        map(occurences => this.plantActions.occurencesLoaded(occurences)),
  );
}
