import { DatePipe } from '@angular/common';
import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Deuda } from 'src/app/models/deuda';
import { DeudaService } from 'src/app/services/deuda.service';

@Component({
  selector: 'app-deuda-form',
  templateUrl: './deuda-form.component.html',
  styleUrls: ['./deuda-form.component.css']
})
export class DeudaFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  deuda: Deuda = {
    id_deuda: 0,
    cliente: 0,
    prestamista: '',
    monto: '',
    fecha_Inicio: new Date(),
    estado: false,
    fecha_Fin: new Date()
  }
  
  edit: boolean = false;
  status = false;
  header = '';
  button = '';
  

  constructor(private deudaService: DeudaService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id){
      this.deudaService.getOneDeuda(params.id)
      .subscribe(
        (res: any) => {
          console.log(res)
          this.deuda = res;
          this.edit = true;
          this.header = 'Modificar Deuda'
          this.button = 'Actualizar'
        },
        err => console.error(err)
      )
    }
  
    if (this.edit == false){
      this.header = 'Alta de Deudas'
      this.button = 'Alta'
    }

  }

  saveNewDeuda(){
    delete this.deuda.id_deuda;
    delete this.deuda.fecha_Fin;

    this.deudaService.saveDeuda(this.deuda)
    .subscribe(
      res =>{
        console.log(res)
        this.router.navigate(['/cliente']);
      },
      err => console.error(err)
    )
  }

  updateDeuda(){
    delete this.deuda.fecha_Inicio;
    this.deuda.fecha_Fin = new Date();
    this.deudaService.updateDeuda(this.deuda.id_deuda, this.deuda)
    .subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/cliente']);
      },
      err => console.error(err)
    )
  }

  checkCheckBoxvalue(event: any){
    this.status = event.target.checked;
    if (this.status == true){
      this.deuda.estado = true;
    }else{
      this.deuda.estado = false;
    }
 }
 mostrar(){
   console.log(this.deuda)
 }
}