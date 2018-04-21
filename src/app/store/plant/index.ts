import { AppState } from './../reducers';
import { createSelector } from '@ngrx/store';

export const getPlants = (state: AppState) => state.plantsState.plants;

export const getPagingSettings = (store: AppState) => ({pageIndex: store.plantsState.pageIndex, pageSize: store.plantsState.pageSize});

export const pagedPlants = createSelector(getPlants,
                                          getPagingSettings,
                (plants, settings) =>
                    (plants || []).slice(settings.pageIndex * settings.pageSize, (settings.pageIndex + 1) * settings.pageSize));
