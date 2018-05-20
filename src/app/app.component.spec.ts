import { APP_BASE_HREF } from '@angular/common';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { AngularFireAuth } from 'angularfire2/auth';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  // An anonymous user
  const authState = null;

  const mockAngularFireAuth: any = {
    auth: jasmine.createSpyObj('auth', {
      signInAnonymously: Promise.resolve({
        code: 'auth/operation-success',
      }),
      // 'signInWithPopup': Promise.reject(),
      // 'signOut': Promise.reject()
    }),
    authState: of(authState),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, MaterialModule, RouterTestingModule, StoreModule.forRoot({})],
      declarations: [
        AppComponent,
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: AngularFireAuth, useValue: mockAngularFireAuth }],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

});
