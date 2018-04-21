import { Plant } from './plant.model';
import { Occurence } from './occurence.model';
import { PlantActions } from './plant.actions';

export interface PlantsState {
    plants: Plant[];
    currentPlant: Plant;
    occurences: Occurence[];
    pageSize: number;
    pageIndex: number;
}

export const INITIAL_STATE: PlantsState = {
    plants: [],
    currentPlant: {
    },
    occurences: [],
    pageSize: 10,
    pageIndex: 0
};

export function plantReducer(storeState: PlantsState = INITIAL_STATE, action)
    : PlantsState {

    switch (action.type) {
        case PlantActions.PLANTS_LOADED:
            return {
                ...storeState,
                plants: action.payload
            };
        case PlantActions.OCCURENCES_LOADED:
            return {
                ...storeState,
                occurences: action.payload
            };
        case PlantActions.PLANT_SELECTED:
            return {
                ...storeState,
                currentPlant: action.payload
            };
        case PlantActions.DO_PAGE:
            return {
                ...storeState,
                pageIndex: action.payload.pageIndex,
                pageSize: action.payload.pageSize
            };
        default:
            return storeState;
    }
}
