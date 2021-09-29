import { Component, HostBinding, OnInit } from '@angular/core';

import { ClienteService } from "../../services/cliente.service";
import { Cliente } from "src/app/models/cliente";

import { DeudaService } from "../../services/deuda.service";
import { Deuda } from "src/app/models/deuda";

import { ActivatedRoute, Router } from "@angular/router";
import {  FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  
  cliente: any = [];
  deuda: any = [];
  input = new FormControl('');
  mostrar: boolean = false;
  mostrar2: boolean = false;
  boolean: boolean = false;

  constructor(private clienteService: ClienteService, private deudaService: DeudaService, private router: Router) {   }

  ngOnInit(): void {
  }

  getCliente(id_cliente: string){
    this.clienteService.getCliente(id_cliente)
    .subscribe(
      cliente => {
        console.log([cliente]);
        this.cliente = [cliente];
      },
      err => console.error(err)
    )
  }

  getDeuda(input: string){
    this.deudaService.getDeuda(input)
    .subscribe(
      deuda => {
        console.log(deuda);
        this.deuda = deuda;
        this.mostrar = true;
      },
      err => this.mostrar = false
    )
  }

  getClientes(){
    this.clienteService.getClientes()
    .subscribe(
      res => {
        console.log(res);
        this.cliente = res;
      },
      err => console.error(err)
    )
  }

  toggleShow(){
    this.mostrar = true;
  }
  toggleShowF(){
    this.mostrar = false;
  }
  toggleShow2(){
    this.mostrar2 = true;
  }
  toggleShow3(){
    this.mostrar2 = false;
  }
  
  inputEditor(){
    console.log(this.input)
    this.getDeuda(this.input.value)
  }
}

