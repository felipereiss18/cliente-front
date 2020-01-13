import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddClienteComponent} from "./cliente/add-cliente/add-cliente.component";
import {ListClienteComponent} from "./cliente/list-cliente/list-cliente.component";
import {EditClienteComponent} from "./cliente/edit-cliente/edit-cliente.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-cliente', component: AddClienteComponent },
  { path: 'list-cliente', component: ListClienteComponent },
  { path: 'edit-cliente', component: EditClienteComponent },
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
