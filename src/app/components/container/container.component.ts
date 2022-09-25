import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivoService } from 'src/app/services/activo.service';
import { AlertsService } from 'src/app/services/alerts.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {


  tipo: string;
  fechaCompra: string;
  serial: number;


  constructor(
    private router: Router,
    private alertsService: AlertsService
  ) { }

  ngOnInit(): void {
  }

  crearActivo(): void{
    this.router.navigate( [ '/crearActivo' ] );
  }

  actualizarActivo(): void{
    this.router.navigate( ['/actualizarActivo'] );
  }

  buscarPorTipo(){

    if( this.tipo === undefined || this.tipo === '' ){ this.alertsService.showError('Debe ingresar un tipo'); }
    else{
      this.router.navigate( ['/resultados', 't', this.tipo] )
    }
    
  }
  buscarPorFechaCompra(){

    if( this.fechaCompra === undefined || this.fechaCompra === '' ){ this.alertsService.showError('Debe ingresar una fecha de compra'); }
    else{
      this.router.navigate( ['/resultados', 'f', this.fechaCompra] )
    }
    
  }
    
    
  buscarPorSerial(){

    if( this.serial === undefined || this.serial === null ){ this.alertsService.showError('Debe ingresar un número de serial'); }
    else{
      this.router.navigate( ['/resultados', 's', this.serial] )
    }
    
  }

  serialMenorACero(): boolean{
    return this.serial != undefined && this.serial != null && this.serial <= 0;
  }


}
