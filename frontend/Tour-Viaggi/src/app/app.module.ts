import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AuthModuleModule } from './auth/auth-module/auth-module.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilmsComponent } from './components/films/films.component';
import { LocalitaComponent } from './components/localita/localita.component';
import { AttivitaComponent } from './components/attivita/attivita.component';
import { LocalitaServiceService } from './components/localita/localita-service.service';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NavbarComponent,
    FilmsComponent,
    LocalitaComponent,
    AttivitaComponent,
    HomepageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModuleModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
