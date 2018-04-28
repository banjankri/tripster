import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { GbifDataSourceService } from './services/data-sources/plants/gbif.datasource.service';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { NotFound404Component } from './not-found404.component';
import { AuthModule } from './features/auth/auth.module';
import { HttpModule } from '@angular/http';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { firebaseConfig } from '../firebase.config';
import { syncReducers } from './store/reducers';
import { RouterEffects } from './features/routing/routing.effects';
import { PlantEffects } from './store/plant/plant.effects';
import { ActivityEffects } from './store/activity/activity.effects';
import { UserEffects } from './store/user/user.effects';
import { PlantModule } from './store/plant/plant.module';
import { SearchModule } from './features/search/search.module';
import { PartyModule } from './store/party/party.module';
import { ActivityModule } from './store/activity/activity.module';
import { UserModule } from './store/user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotFound404Component,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'tripster' }),
    BrowserAnimationsModule,
    HttpModule,
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router', // name of reducer key
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    EffectsModule.forRoot([RouterEffects]),
    StoreModule.forRoot(syncReducers),
    UserModule,
    ActivityModule,
    PlantModule,
    PartyModule,
    SearchModule,
    MaterialModule,
    AuthModule,
    RoutingModule,
  ],
  providers: [GbifDataSourceService],
  bootstrap: [AppComponent],
})
export class AppModule { }
