
import { throwError as observableThrowError,  Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class GOABaseDataSourceService {

  constructor(private http: HttpClient) {
        // this.getEaxmpleOccurence();
  }

  closestNParties(amount: number) {
    return this.errorWrapper(this.get(`party/json/?limit=${amount}`).pipe(
          map(res => (<any>res).partyList)),
    );
  }

  private errorWrapper(call: Observable<any>) {
    return call.pipe(catchError((error: any) => observableThrowError(error.error || 'Server error')));
  }

  private get(url) {
    return this.http.get(GOABaseDataSourceService.API_URL + url);
  }

  static get API_URL(): string {
    return 'https://www.goabase.net/api/';
  }
}
