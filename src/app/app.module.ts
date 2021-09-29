import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { NavigationComponent } from './components/navigation/navigation.component';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';

import {ClienteService} from './services/cliente.service'

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PrestamistaFormComponent } from './components/prestamista-form/prestamista-form.component';
import { DeudaFormComponent } from './components/deuda-form/deuda-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ClienteListComponent,
    ClienteFormComponent,
    PrestamistaFormComponent,
    DeudaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
