import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class GbifDataSourceService {

  constructor(private http: HttpClient) {
  }

  searchPlantsByQuery(query: string) {
    return this.errorWrapper(this.get(`species/search?q=${query}`).pipe(
            map(res => (<any>res).results)),
    );
  }

  plantOccurences(scientificName: string) {
    return this.errorWrapper(this.get(`occurrence/search?scientificName=${scientificName}`).pipe(
            map(res => (<any>res).results)),
    );
  }

  private errorWrapper(call: Observable<any>) {
    return call.pipe(catchError((error: any) => observableThrowError(error.json().error || 'Server error')));
  }

  private get(url) {
    return this.http.get(GbifDataSourceService.GBIF_API_URL + url);
  }

  static get GBIF_API_URL(): string {
    return 'http://api.gbif.org/v1/';
  }
}
