import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Activity } from './activity.model';

@Injectable()
export class ActivityService {

  constructor(private db: AngularFireDatabase) {

  }

  search(searchTerm: string): Observable<Activity[]> {
    return this.db.list<Activity>('/activities', ref =>
            searchTerm ? ref.equalTo(searchTerm ? searchTerm : null, 'name') : ref,
        ).valueChanges();
  }
}
