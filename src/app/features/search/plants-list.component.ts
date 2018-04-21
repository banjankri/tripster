import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { PlantActions } from '../../store/plant/plant.actions';
import * as RoutingActions from '../routing/routing.actions';
import { Plant } from './../../store/plant/plant.model';
import { AppState } from './../../store/reducers';

@Component({
    templateUrl: './plants-list.component.html'
})
export class PlantsListComponent implements OnDestroy, OnInit {
    plants$: Observable<Plant[]>;

    displayedColumns = ['canonicalName', 'class'];

    dataSource = new MatTableDataSource<Plant>([]);
    selection = new SelectionModel<Plant>(false, null);

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    private unsubscribe = new Subject<void>();

    constructor(private store: Store<AppState>, private plantActions: PlantActions, private activatedRoute: ActivatedRoute) {
    }

    plantSelected(plant: Plant, $event: Event) {
        this.store.dispatch(this.plantActions.plantSelected(plant));
        this.store.dispatch(new RoutingActions.Go({path: ['/details']}));

        $event.preventDefault();
    }

    ngOnInit() {
        this.store.dispatch(this.plantActions.search(this.activatedRoute.snapshot.queryParams['query']));

        this.plants$ = this.store.select(state => state.plantsState.plants);
        this.plants$.subscribe(plants => this.initDataSource(plants));
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    }

    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    private initDataSource(plants: Plant[]) {
        this.dataSource = new MatTableDataSource<Plant>(plants);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }
}