import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from '../../services/auth.service';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';

export const authRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login-email', component: EmailComponent },
    { path: 'members', component: MembersComponent, canActivate: [AuthGuard] }
];
