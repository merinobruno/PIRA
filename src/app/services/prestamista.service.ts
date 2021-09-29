import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Prestamista } from "../models/prestamista";

@Injectable({
  providedIn: 'root'
})
export class PrestamistaService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

    getPrestamistas(){
      return this.http.get(`${this.API_URI}/prestamista`);
    }

    getPrestamista(id: string){
      return this.http.get(`${this.API_URI}/prestamista/${id}`);
    }

    deletePrestamista(id: string){
      return this.http.delete(`${this.API_URI}/prestamista/${id}`);
    }

    savePrestamista(prestamista: Prestamista){
      return this.http.post(`${this.API_URI}/prestamista`, prestamista);
    }

    updatePrestamista(id: string|number, updatedPrestamista: Prestamista){
      return this.http.put(`${this.API_URI}/prestamista/${id}`, updatedPrestamista)
    }
}