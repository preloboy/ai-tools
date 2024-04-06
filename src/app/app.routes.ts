import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AiToolsComponent } from './components/ai-tools/ai-tools.component';
import { ErrorComponent } from './components/error/error.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'ai-tools', component: AiToolsComponent },
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