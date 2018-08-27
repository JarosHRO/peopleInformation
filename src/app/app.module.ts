import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// routes
import { app_routing } from './app.routes';

// services
import { PeoplesService } from './services/peoples.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PeoplesComponent } from './components/peoples/peoples.component';
import { HttpModule } from '../../node_modules/@angular/http';
import { SearchPipe } from './pipe/search.pipe';
import { PeopleComponent } from './components/people/people.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PeoplesComponent,
    SearchPipe,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpModule,
    FormsModule
  ],
  providers: [
    PeoplesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
