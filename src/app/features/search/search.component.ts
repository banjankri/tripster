import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})
export class SearchComponent {

    @Input()
    public value: string;

    @Output()
    public search: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    onClick(searchTerm: string): void {
        this.search.emit({searchTerm});
    }
}
