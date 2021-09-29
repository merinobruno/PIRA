import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Deuda } from "../models/deuda";

@Injectable({
  providedIn: 'root'
})
export class DeudaService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

    getDeudas(){
      return this.http.get(`${this.API_URI}/deuda`);
    }

    getDeuda(id: string){
      return this.http.get(`${this.API_URI}/deuda/${id}`);
    }

    getOneDeuda(id: string){
      return this.http.get(`${this.API_URI}/deuda/one/${id}`);
    }

    deleteDeuda(id: string){
      return this.http.delete(`${this.API_URI}/deuda/${id}`);
    }

    saveDeuda(deuda: Deuda){
      return this.http.post(`${this.API_URI}/deuda`, deuda);
    }

    updateDeuda(id: string|number, updatedDeuda: Deuda){
      return this.http.put(`${this.API_URI}/deuda/${id}`, updatedDeuda)
    }
}