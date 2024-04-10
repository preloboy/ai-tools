import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/home/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignupComponent } from './components/home/signup/signup.component';
import { authGuard } from './security/auth.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'create', component: SignupComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate:[authGuard] },
    // { path: 'hero/:id', component: HeroDetailComponent },
    // {
    //     path: 'heroes',
    //     component: HeroListComponent,
    //     data: { title: 'Heroes List' }
    // },
    // {
    //     path: '',
    //     redirectTo: '/heroes',
    //     pathMatch: 'full'
    // },
    { path: '**', component: ErrorComponent }
];