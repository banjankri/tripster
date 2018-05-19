
import { throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/observable/throw';


@Injectable()
export class GbifDataSourceService {

  constructor(private http: Http) {
  }

  searchPlantsByQuery(query: string) {
    return this.errorWrapper(this.get(`species/search?q=${query}`)
                .map(res => res.json().results));
  }

  plantOccurences(scientificName: string) {
    return this.errorWrapper(this.get(`occurrence/search?scientificName=${scientificName}`)
            .map(res => res.json().results));
  }

  private errorWrapper(call: Observable<Response>) {
    return call.catch((error: any) => observableThrowError(error.json().error || 'Server error'));
  }

  private get(url) {
    return this.http.get(GbifDataSourceService.GBIF_API_URL + url);
  }

  static get GBIF_API_URL(): string {
    return 'http://api.gbif.org/v1/';
  }
}
