import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prestamista } from 'src/app/models/prestamista';
import { PrestamistaService } from 'src/app/services/prestamista.service';

@Component({
  selector: 'app-prestamista-form',
  templateUrl: './prestamista-form.component.html',
  styleUrls: ['./prestamista-form.component.css']
})
export class PrestamistaFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  
  prestamista: Prestamista = {
    id_prestamista: 0,
    cuil: '',
    nombre_prestamista: '',
  }

  edit: boolean = false;
  header = '';
  button = '';

  constructor(private prestamistaService: PrestamistaService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id){
      this.prestamistaService.getPrestamista(params.id)
      .subscribe(
        (res: any) => {
          console.log(res);
          this.prestamista = res;
          this.edit = true;
          this.header = 'Modificar Comercio'
          this.button = 'Actualizar'
        },
        err => console.error(err)
      )
    }
    if (this.edit == false){
      this.header = 'Alta de Comercios'
      this.button = 'Alta'
    }
  }

  saveNewPrestamista(){
    delete this.prestamista.id_prestamista;

    this.prestamistaService.savePrestamista(this.prestamista)
    .subscribe(
      res =>{
        console.log(res)
        this.router.navigate(['/cliente']);
      },
      err => console.error(err)
    )
  }

  updatePrestamista(){
    this.prestamistaService.updatePrestamista(this.prestamista.id_prestamista, this.prestamista)
    .subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/cliente']);
      },
      err => console.error(err)
    )
  }

}
