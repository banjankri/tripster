import { Routes } from '@angular/router';

import { PlantDetailsComponent } from './../plant/plant-details.component';
import { PlantsListComponent } from './plants-list.component';

export const routes: Routes = [
  {
    path: 'plants-list',
    component: PlantsListComponent
  }, {
    path: 'details',
    loadChildren: '../plant/index#PlantDetailsModule',
  }

];
