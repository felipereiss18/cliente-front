import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../../service/api.service";
import {Validacoes} from "../validacoes";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      nome: ['', Validators.required],
      cpf: ['', Validators.compose([Validators.required, Validacoes.ValidaCpf])],
      endereco: this.formBuilder.group({
        cep: ['', Validators.required],
        logradouro: ['', Validators.required],
        bairro: ['', Validators.required],
        cidade: ['', Validators.required],
        uf: ['', Validators.required]
      }),
      telefone: this.formBuilder.array([{
        tipo: ['', Validators.required],
        numero: ['', Validators.required]
      }])
    });

  }

  onSubmit() {
    this.apiService.createUser(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-cliente']);
      });
  }

  get cpf() {
    return this.addForm.get('cpf');
  }
}
