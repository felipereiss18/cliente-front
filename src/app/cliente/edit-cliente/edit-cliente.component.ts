import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {Cliente} from "../../model/cliente.model";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit {

  user: Cliente;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    let userId = window.localStorage.getItem("editUserId");
    if(!userId) {
      alert("Invalid action.")
      this.router.navigate(['list-cliente']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [''],
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      salary: ['', Validators.required]
    });
    this.apiService.getUserById(+userId)
      .subscribe( data => {
        this.editForm.setValue(data.data);
      });
  }

  onSubmit() {
    this.apiService.updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if(data.status === 200) {
            alert('User updated successfully.');
            this.router.navigate(['list-cliente']);
          }else {
            alert(data.message);
          }
        },
        error => {
          alert(error);
        });
  }

}
