import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules, Routes } from '@angular/router';

import { DashboardComponent } from './features/dashboard/dashboard.component';
import { NotFound404Component } from './not-found404.component';
import { AppComponent } from './app.component';

const rootRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
    { path: '**', component: NotFound404Component },
];

@NgModule({
  imports: [
    RouterModule.forRoot(rootRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class RoutingModule {}
