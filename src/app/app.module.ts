import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AdminHomePageComponent } from './main/admin-session/admin-home-page/admin-home-page.component';
import { AdminSessionComponent } from './main/admin-session/admin-session.component';
import { AdminMenuBarComponent } from './main/admin-session/admin-menu-bar/admin-menu-bar.component';
import { AddCustomerComponent } from './main/admin-session/add-customer/add-customer.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AdminHomePageComponent,
    AdminSessionComponent,
    AddCustomerComponent,
    AdminMenuBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
