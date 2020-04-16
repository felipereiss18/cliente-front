import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../service/api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const loginPayload = {
      login: this.loginForm.controls.usuario.value,
      senha: this.loginForm.controls.senha.value
    }
    this.apiService.login(loginPayload).subscribe(data => {
      if(data.status === 200) {
        window.localStorage.setItem('token', data.data);
        this.router.navigate(['list-cliente']);
      }else {
        this.invalidLogin = true;
        alert(data.message);
      }
    });
  }

  ngOnInit() {
    window.localStorage.removeItem('token');
    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.compose([Validators.required])],
      senha: ['', Validators.required]
    });
  }



}