import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioClienteComponent } from './pages/formulario-cliente/formulario-cliente.component';
import { FormularioCompraComponent } from './pages/formulario-compra/formulario-compra.component';
import { HomeComponent } from './pages/home/home.component';
import { ListCompraComponent } from './pages/list-compra/list-compra.component';
import { ListaClienteComponent } from './pages/lista-cliente/lista-cliente.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'lista-cliente',
    component: ListaClienteComponent,

  },
  {
    path: 'formulario-cliente',
    component: FormularioClienteComponent,
    
  },
  {
    path: 'formulario-compra',
    component: FormularioCompraComponent,   
  },
  {
    path: 'lista-compra',
    component: ListCompraComponent,   
  },
  {
    path: 'filter-compra',
    component: ListCompraComponent,   
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
