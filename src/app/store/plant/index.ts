import { AppState } from './../reducers';
import { createSelector } from '@ngrx/store';

export const getPlants = (state: AppState) => state.plantsState.plants;
