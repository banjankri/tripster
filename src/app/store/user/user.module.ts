import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { UserService } from './user.service';
import { UserEffects } from './user.effects';
import { userReducer } from './user.reducer';


const STORE_DEV_TOOLS_IMPORTS = [];

@NgModule({
  declarations: [
  ],
  imports: [
    EffectsModule.forFeature([UserEffects]),
    StoreModule.forFeature('user', userReducer),
  ],
  providers: [UserService],
})
export class UserModule {}
