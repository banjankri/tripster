import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthGuard } from './../../services/auth.service';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { authRoutes } from './auth.routing';
import { EmailComponent } from './email/email.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    LoginComponent,
    MembersComponent,
    SignupComponent,
    EmailComponent,
    AccountDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(authRoutes),
  ],
  entryComponents: [
    LoginComponent,
  ],
  providers: [
    AngularFireAuth,
    AuthGuard,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {

}
