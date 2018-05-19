import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Party } from './party.model';
import { GOABaseDataSourceService } from './../../services/data-sources/parties/goabase.datasource.service';

@Injectable()
export class PartyService {

  constructor(private ds: GOABaseDataSourceService) {

  }

  loadNUpcomingParties(n: number): Observable<Party[]> {
    return this.ds.closestNParties(n);
  }
}
