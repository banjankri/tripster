import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';


import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';

@NgModule({
    declarations: [
        LoginComponent,
        MembersComponent,
        SignupComponent,
        EmailComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    entryComponents: [
        LoginComponent
    ],
    providers: [
        AngularFireAuth
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class AuthModule {

}
