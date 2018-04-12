import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { routes } from './plants-list.routing';

import { PlantsListComponent } from './plants-list.component';
import { MaterialModule } from '../../material.module';
import { SearchComponent } from './search.component';


@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        PlantsListComponent,
        SearchComponent
    ],
    exports: [
        PlantsListComponent,
        SearchComponent
    ]
})
export class SearchModule { }
