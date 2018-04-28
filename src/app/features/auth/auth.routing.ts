import { Routes } from '@angular/router';
import { AuthGuard } from '../../services/auth.service';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { EmailComponent } from './email/email.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { SignupComponent } from './signup/signup.component';


export const authRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login-email', component: EmailComponent },
    { path: 'members', component: MembersComponent, canActivate: [AuthGuard] },
    { path: 'account-details', component: AccountDetailsComponent, canActivate: [AuthGuard] },
];
