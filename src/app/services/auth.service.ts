import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth: AngularFireAuth, private router: Router) {}

    canActivate(): Observable<boolean> {
      return Observable.of(this.auth.authState)
        .take(1)
        .map(state => !!state)
        .do(authenticated => {
          if (!authenticated) {
            this.router.navigate([ '/login' ]);
          }
        });
    }
}
