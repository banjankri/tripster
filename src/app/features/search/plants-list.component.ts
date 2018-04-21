import * as RoutingActions from '../routing/routing.actions';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Component, ViewChild, AfterViewInit, OnDestroy, OnInit } from '@angular/core';

import { PlantActions } from './../../store/plant/plant.actions';
import { AppState } from './../../store/reducers';
import { Plant } from './../../store/plant/plant.model';
import { DataSource } from '@angular/cdk/table';
import { MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { tap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';

import * as fromPlants from './../../store/plant';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    templateUrl: './plants-list.component.html'
})
export class PlantsListComponent implements AfterViewInit, OnDestroy, OnInit {
    plants$: Observable<Plant[]>;

    displayedColumns = ['canonicalName', 'class'];
    dataSource = new PlantsDataSource(this.store);
    selection = new SelectionModel<Plant>(false, null);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    private unsubscribe = new Subject<void>();

    constructor(private store: Store<AppState>, private plantActions: PlantActions, private activatedRoute: ActivatedRoute) {
        this.plants$ = store.select(state => state.plantsState.plants);
    }

    plantSelected(plant: Plant, $event: Event) {
        this.store.dispatch(this.plantActions.plantSelected(plant));
        this.store.dispatch(new RoutingActions.Go({path: ['/details']}));

        $event.preventDefault();
    }

    ngOnInit() {
        this.store.dispatch(this.plantActions.search(this.activatedRoute.snapshot.queryParams['query']));
    }

    /**
      * Set the paginator after the view init since this component will
      * be able to query its view for the initialized paginator.
      */
    ngAfterViewInit() {
        this.paginator.page.pipe(
            takeUntil(this.unsubscribe),
            tap(() => {
                this.store.dispatch(this.plantActions.doPage(this.paginator.pageIndex, this.paginator.pageSize));
            }),
        ).subscribe();
    }

    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}


export class PlantsDataSource extends DataSource<Plant> {

    constructor(private store: Store<AppState>) {
        super();
    }

    connect(): Observable<Plant[]> {
        return this.store.select(fromPlants.pagedPlants);
    }

    disconnect() {}
}
