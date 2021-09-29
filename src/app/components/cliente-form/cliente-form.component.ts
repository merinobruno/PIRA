import { Component, HostBinding, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from "../../services/cliente.service";

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  cliente: Cliente = {
    id_cliente: 0,
    dni: '',
    nombre: '',
    apellido: '',
    direccion: '',
    telefono: '',
    correo: '',
  }

  header = '';
  button = '';

  edit: boolean = false;

  constructor(private clienteService: ClienteService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id){
      this.clienteService.getCliente(params.id)
      .subscribe(
        (res: any) => {
          console.log(res);
          this.cliente = res;
          this.edit = true;
          this.header = 'Modificar Cliente'
          this.button = 'Actualizar'
        },
        err => console.error(err)
      )
    }
    if (this.edit == false){
      this.header = 'Alta de Clientes'
      this.button = 'Alta'
    }
  }

  saveNewCliente(){
    delete this.cliente.id_cliente;

    this.clienteService.saveCliente(this.cliente)
    .subscribe(
      res =>{
        console.log(res)
        this.router.navigate(['/cliente']);
      },
      err => console.error(err)
    )
  }

  updateCliente(){
    this.clienteService.updateCliente(this.cliente.id_cliente, this.cliente)
    .subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/cliente']);
      },
      err => console.error(err)
    )
  }
}
