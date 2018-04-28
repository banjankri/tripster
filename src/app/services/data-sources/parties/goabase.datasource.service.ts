import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class GOABaseDataSourceService {

  constructor(private http: Http) {
        // this.getEaxmpleOccurence();
  }

  closestNParties(amount: number) {
    return this.errorWrapper(this.get(`party/json/?limit=${amount}`)
            .map(res => res.json().partyList));
  }

  private errorWrapper(call: Observable<Response>) {
    return call.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  private get(url) {
    return this.http.get(GOABaseDataSourceService.API_URL + url);
  }

  static get API_URL(): string {
    return 'https://www.goabase.net/api/';
  }
}
