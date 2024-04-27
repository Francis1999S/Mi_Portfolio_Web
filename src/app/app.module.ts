import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ScrollComponent } from './components/scroll/scroll.component';
import { LogoComponent } from './components/logo/logo.component';
import { MenuComponent } from './elements/menu/menu.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AnimationComponent } from './components/animation/animation.component';
import { TrabajoComponent } from './components/trabajo/trabajo.component';
import { Trabajo2Component } from './components/trabajo2/trabajo2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { SPAComponent } from './spa/spa.component';

import localeEsAr from '@angular/common/locales/es-AR';
import { CommonModule, HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { Trabajo3Component } from './components/trabajo3/trabajo3.component';
import { ProjectsComponent } from './components/projects/projects.component';
registerLocaleData(localeEsAr, 'es-AR');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    ScrollComponent,
    LogoComponent,
    MenuComponent,
    ContactoComponent,
    AnimationComponent,
    TrabajoComponent,
    Trabajo2Component,
    LoginComponent,
    AdminComponent,
    SPAComponent,
    Trabajo3Component,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-AR'},
  { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
