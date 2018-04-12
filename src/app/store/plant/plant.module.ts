import { PlantActions } from './plant.actions';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { PlantService } from './plant.service';
import { PlantEffects } from './plant.effects';
import { plantReducer } from './plant.reducer';

const STORE_DEV_TOOLS_IMPORTS = [];

@NgModule({
  declarations: [
  ],
  imports: [
    EffectsModule.forFeature([PlantEffects]),
    StoreModule.forFeature('plant', plantReducer),
  ],
  providers: [PlantService, PlantActions],
})
export class PlantModule {}
