import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
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
