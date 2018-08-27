import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeoplesComponent } from './components/peoples/peoples.component';
import { AboutComponent } from './components/about/about.component';
import { PeopleComponent } from './components/people/people.component';

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'peoples', component: PeoplesComponent},
    {path: 'about', component: AboutComponent},
    {path: 'people/:id', component: PeopleComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'}
]

export const app_routing = RouterModule.forRoot(APP_ROUTES, {useHash: true})