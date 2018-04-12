import { ActivityActions } from './activity.actions';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { ActivityService } from './activity.service';
import { ActivityEffects } from './activity.effects';
import { activityReducer } from './activity.reducer';

const STORE_DEV_TOOLS_IMPORTS = [];

@NgModule({
  declarations: [
  ],
  imports: [
    EffectsModule.forFeature([ActivityEffects]),
    StoreModule.forFeature('activity', activityReducer),
  ],
  providers: [ActivityService, ActivityActions],
})
export class ActivityModule {}
