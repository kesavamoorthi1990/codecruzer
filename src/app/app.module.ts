import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { customHttpProvider } from './../_helpers/index';
import { AlertComponent } from './../_directives/index';
import { AuthGuard } from './../_guards/index';
import { AlertService, AuthenticationService, UserService } from './../_services/index';


import { HomeComponent } from './home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './accounts/login/login.component';
import { RegisterComponent } from './accounts/register/register.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdInputModule} from '@angular/material';
import {MdCheckboxModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import { SideMenuBarComponent } from './components/side-menu-bar/side-menu-bar.component';
import { AccountsComponent } from './accounts/accounts.component';

import { ClickOutsideDirective } from './shared/directive/clickoutside.directive';



@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    SideMenuBarComponent,
    RegisterComponent,
    AccountsComponent,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdCheckboxModule,
    MdButtonModule,
    routing
  ],
  exports: [
    BrowserAnimationsModule,
    MdInputModule,
    MdCheckboxModule,
    MdButtonModule,
    ClickOutsideDirective
  ],
  providers: [
    customHttpProvider,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


