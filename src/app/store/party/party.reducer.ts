import { Party } from './party.model';
import { PartyAction, PartyActions } from './party.actions';

export interface PartyState {
  parties: Party[];
}

export const INITIAL_STATE: PartyState = {
  parties: [],
};

export function partyReducer(storeState: PartyState = INITIAL_STATE, action)
    : PartyState {

  switch (action.type) {
    case PartyActions.PARTIES_LOADED:
      return {
        ...storeState,
        parties: action.payload,
      };
    default:
      return storeState;
  }
}
