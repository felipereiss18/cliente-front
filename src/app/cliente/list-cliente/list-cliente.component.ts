import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {Cliente} from "../../model/cliente.model";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.css']
})
export class ListClienteComponent implements OnInit {

  clientes: Cliente[];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.apiService.getClientes()
      .subscribe( data => {
        this.clientes = data.data;
      });
  }

  excluirCliente(cliente: Cliente): void {
    this.apiService.deleteUser(cliente.id)
      .subscribe( data => {
        this.clientes = this.clientes.filter(u => u !== cliente);
      })
  };

  alterarCliente(cliente: Cliente): void {
    window.localStorage.removeItem("editUserId");
    window.localStorage.setItem("editUserId", cliente.id.toString());
    this.router.navigate(['edit-cliente']);
  };

  adicionarCliente(): void {
    this.router.navigate(['add-cliente']);
  };
}
