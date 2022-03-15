import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './sections/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './sections/add-user/add-user.component';
import { UpdateUserComponent } from './sections/update-user/update-user.component';
import { FormsModule } from '@angular/forms';
import { CatComponent } from './sections/cat/cat.component';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddUserComponent,
    UpdateUserComponent,
    CatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
