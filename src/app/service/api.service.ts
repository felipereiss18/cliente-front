import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Cliente} from "../model/cliente.model";
import {Observable} from "rxjs/index";
import {ApiResponse} from "../model/api.response";
import {map} from "rxjs/operators";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/cliente/';

  login(loginPayload) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth', loginPayload);
  }

  getClientes() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + 'cliente');
  }

  getUserById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + 'cliente/' + id);
  }

  createUser(cliente: Cliente): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'cliente', cliente);
  }

  updateUser(cliente: Cliente): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + 'cliente/' + cliente.id, cliente);
  }

  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + 'cliente/' + id);
  }
}
