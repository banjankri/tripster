import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { PlantsListComponent } from './plants-list.component';
import { routes } from './plants-list.routing';
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
