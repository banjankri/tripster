import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';


@Injectable()
export class PartyActions {

    static SEARCH = 'PARTY_SEARCH';

    static UPCOMING = 'PARTIES_UPCOMING';

    static PARTIES_LOADED = 'PARTIES_LOADED';

    static PARTY_SELECTED = 'PARTY_SELECTED';

    search(searchTerm: string) {
        return {
            type: PartyActions.SEARCH,
            payload: searchTerm
        };
    }

    upcoming() {
        return {
            type: PartyActions.SEARCH,
            payload: 5
        };
    }

    partiesLoaded(parties) {
        return {
            type: PartyActions.PARTIES_LOADED,
            payload: parties
        };
    }

    plantSelected(plant) {
        return {
            type: PartyActions.PARTY_SELECTED,
            payload: plant
        };
    }

}

export interface PartyAction {
    type: string;
    payload: any;
}
