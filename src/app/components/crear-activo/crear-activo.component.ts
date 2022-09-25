import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivoService } from 'src/app/services/activo.service';
import { AlertsService } from 'src/app/services/alerts.service';


@Component({
  selector: 'app-crear-activo',
  templateUrl: './crear-activo.component.html',
  styleUrls: ['./crear-activo.component.css']
})
export class CrearActivoComponent implements OnInit {

  items: any;
  checkoutform: any;
  sendingRequest: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private service: ActivoService,
    private alertService: AlertsService
  ) { 
    this.checkoutform = this.formBuilder.group({
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


  crearActivo(data:any): void {
    if(this.validarCampos(data)){
      this.sendingRequest = true;
      this.service.createActivo({
        nombre: data.nombre,
        descripcion: data.descripcion,
        tipo: data.tipo,
        numIntInventario: data.numIntInv,
        peso: data.peso,
        alto: data.alto,
        ancho: data.ancho,
        valorCompra: data.valorCompra,
        fechaCompra: data.fechaCompra,
      }).subscribe( (response: any) =>{
        this.sendingRequest = false;
        this.alertService.showSuccess("El activo con serial "+ response.serial + " ha sido creado");
        
      }, error =>{
        this.sendingRequest = false;
        if( error.error.message ){ this.alertService.showError(error.error.message); }
        else{ this.alertService.showError("Ha ocurrido un error, intente más tarde"); }
      } );
    }else{
      this.alertService.showError("Todos los campos son obligatorios")
    }
    
  }

  menorACero(num: number): boolean{
    return (num!= null && num <= 0);
  }

  numeroNegativo(): boolean{
    this.items = this.checkoutform.value;
    return this.menorACero(this.items.numIntInv)|| this.menorACero(this.items.peso) || this.menorACero(this.items.alto) || this.menorACero( this.items.ancho ) || this.menorACero(this.items.valorCompra);
  }

  validarCampos(data: any):boolean {

    return data.nombre != '' && data.descripcion != '' && data.tipo != '' && data.numIntInv != null &&
    data.peso != null && data.alto != null && data.ancho != null && data.valorCompra != null &&
    data.fechaCompra != null && data.fechaCompra != '';

  }
}
