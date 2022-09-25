import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivoService } from 'src/app/services/activo.service';
import { AlertsService } from 'src/app/services/alerts.service';

@Component({
  selector: 'app-actualizar-activo',
  templateUrl: './actualizar-activo.component.html',
  styleUrls: ['./actualizar-activo.component.css']
})
export class ActualizarActivoComponent implements OnInit {

  items:any;
  checkoutform: any;
  sendingRequest: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private service: ActivoService,
    private alertsService: AlertsService
  ) { 
    this.checkoutform = this.formBuilder.group({
      serial: null,
      nombre: '',
      descripcion: '',
      tipo: '',
      numIntInv: null,
      peso: null,
      alto: null,
      ancho: null,
      valorCompra: null,
      fechaCompra: null
    })
  }

  ngOnInit(): void {
    this.sendingRequest = false;
  }


  camposObligatorios(data: any): boolean{
    return data.serial != null && ( data.nombre != '' || data.descripcion != '' || data.tipo != '' || data.numIntInv != null ||
    data.peso != null || data.alto != null || data.ancho != null || data.valorCompra != null ||
    (data.fechaCompra != null && data.fechaCompra != '') );
  }

  menorACero(num: number): boolean{
    return (num!= null && num <= 0);
  }

  numeroNegativo(): boolean{
    this.items = this.checkoutform.value;
    return this.menorACero(this.items.serial) || this.menorACero(this.items.numIntInv)|| this.menorACero(this.items.peso) || this.menorACero(this.items.alto) || this.menorACero( this.items.ancho ) || this.menorACero(this.items.valorCompra);
  }

  actualizarActivo(data :any): void{
    if( this.camposObligatorios(data) ){

      this.service.updateActivo({
        serial: data.serial,
        nombre: data.nombre != '' ? data.nombre : null,
        descripcion: data.descripcion != '' ? data.descripcion : null,
        tipo: data.tipo != ''? data.tipo : null,
        numIntInventario: data.numIntInv,
        peso: data.peso,
        alto: data.alto,
        ancho: data.ancho,
        valorCompra: data.valorCompra,
        fechaCompra: data.fechaCompra != '' && data.fechaCompra != null ? data.fechaCompra : null,
      }).subscribe(response => {
        this.alertsService.showSuccess('El activo ha sido actualizado satisfactoriamente');
      }, error =>{
        if( error.error.message ){ this.alertsService.showError(error.error.message); }
        else{ this.alertsService.showError("Hsa ocurrido un error, intente más tarde"); }
      });
      
    }else{
      this.alertsService.showError('Para actualizar un activo debe llenar el campo serial y al menos uno de los otros campos')
    }
  }
}
