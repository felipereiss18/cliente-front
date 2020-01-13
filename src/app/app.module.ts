import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListClienteComponent } from './cliente/list-cliente/list-cliente.component';
import { LoginComponent } from './login/login.component';
import { AddClienteComponent } from './cliente/add-cliente/add-cliente.component';
import { EditClienteComponent } from './cliente/edit-cliente/edit-cliente.component';
import {routing} from "./app.routing";
import {ReactiveFormsModule} from "@angular/forms";
import {ApiService} from "./service/api.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "./core/interceptor";

@NgModule({
  declarations: [
    AppComponent,
    ListClienteComponent,
    LoginComponent,
    AddClienteComponent,
    EditClienteComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService, {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
