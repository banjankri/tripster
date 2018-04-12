import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { GOABaseDataSourceService } from './../../services/data-sources/parties/goabase.datasource.service';
import { PartyEffect } from './party.effects';
import { PartyActions } from './party.actions';
import { PartyService } from './party.service';
import { partyReducer } from './party.reducer';


@NgModule({
  declarations: [
  ],
  imports: [
    EffectsModule.forFeature([PartyEffect]),
    StoreModule.forFeature('party', partyReducer),
  ],
  providers: [PartyService, PartyActions, GOABaseDataSourceService],
})
export class PartyModule {}
