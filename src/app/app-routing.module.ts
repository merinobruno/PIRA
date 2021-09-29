import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';
import { PrestamistaFormComponent } from './components/prestamista-form/prestamista-form.component';
import { DeudaFormComponent } from './components/deuda-form/deuda-form.component';

const routes: Routes = [
  {
  path: '',
  redirectTo: '/cliente',
  pathMatch: 'full'
  },
  {
    path: 'cliente',
    component: ClienteListComponent
  },
  {
    path: 'cliente/add',
    component: ClienteFormComponent
  },
  {
    path: 'cliente/edit/:id',
    component: ClienteFormComponent
  },
  {
    path: 'comercio/add',
    component: PrestamistaFormComponent
  },
  {
    path: 'comercio/edit/:id',
    component: PrestamistaFormComponent
  }
  ,
  {
    path: 'deuda/add',
    component: DeudaFormComponent
  },
  {
    path: 'deuda/edit/:id',
    component: DeudaFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
