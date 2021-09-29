import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cliente } from "../models/cliente";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  API_URI = '/api';

  constructor(private http: HttpClient) { }

    getClientes(){
      return this.http.get(`${this.API_URI}/cliente`);
    }

    getCliente(id: string){
      return this.http.get(`${this.API_URI}/cliente/${id}`);
    }

    getClientebyDNI(dni: any){
      return this.http.get(`${this.API_URI}/cliente`, dni);
    }

    deleteCliente(id: string){
      return this.http.delete(`${this.API_URI}/cliente/${id}`);
    }

    saveCliente(cliente: Cliente){
      return this.http.post(`${this.API_URI}/cliente`, cliente);
    }

    updateCliente(id: string|number, updatedCliente: Cliente){
      return this.http.put(`${this.API_URI}/cliente/${id}`, updatedCliente)
    }
}