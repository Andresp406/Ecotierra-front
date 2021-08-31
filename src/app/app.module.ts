import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioClienteComponent } from './pages/formulario-cliente/formulario-cliente.component';
import { HeaderComponent } from './shared/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaClienteComponent } from './pages/lista-cliente/lista-cliente.component';
import { ValidationErrorsComponent } from './shared/validation-errors/validation-errors.component';
import { HomeComponent } from './pages/home/home.component';
import { FormularioCompraComponent } from './pages/formulario-compra/formulario-compra.component';
import { ListCompraComponent } from './pages/list-compra/list-compra.component';
import { SelectAllClientComponent } from './components/select-all-client/select-all-client.component';
import { FilterDateClientComponent } from './components/filter-date-client/filter-date-client.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioClienteComponent,
    FormularioCompraComponent,
    HeaderComponent,
    ListaClienteComponent,
    ListCompraComponent,
    HomeComponent,
    ValidationErrorsComponent,
    SelectAllClientComponent,
    FilterDateClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
