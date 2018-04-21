import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';

import { Plant } from './plant.model';

@Injectable()
export class PlantActions {

    static SEARCH = 'PLANT_SEARCH';

    static PLANTS_LOADED = 'PLANTS_LOADED';

    static PLANT_SELECTED = 'PLANT_SELECTED';

    static OCCURENCES_LOADED = 'OCCURENCES_LOADED';

    static DO_PAGE = 'DO_PAGE';

    search(searchTerm: string) {
        return {
            type: PlantActions.SEARCH,
            payload: searchTerm
        };
    }

    plantsLoaded(activities: Plant[]) {
        return {
            type: PlantActions.PLANTS_LOADED,
            payload: activities
        };
    }

    plantSelected(plant: Plant) {
        return {
            type: PlantActions.PLANT_SELECTED,
            payload: plant
        };
    }

    occurencesLoaded(occurences) {
        return {
            type: PlantActions.OCCURENCES_LOADED,
            payload: occurences
        };
    }

    doPage(pageIndex, pageSize) {
        return {
            type: PlantActions.DO_PAGE,
            payload: {
                pageIndex,
                pageSize
            }
        };
    }
}

export interface PlantAction {
    type: string;
    payload: any;
}
