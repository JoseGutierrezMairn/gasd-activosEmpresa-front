import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivoService } from 'src/app/services/activo.service';
import { AlertsService } from 'src/app/services/alerts.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  queryType: string;
  query: string;
  sendingRequest: boolean;
  activos: any[];

  constructor(
    private params : ActivatedRoute,
    private service: ActivoService,
    private alertsService: AlertsService,
    private router: Router
  ) {

    this.sendingRequest = true;
    this.params.params.subscribe(params => {
      this.query = params['param']
      this.queryType = params['q'] === 'f' ? `fecha` : params['q'] === 't'? 'tipo' : 'serial';
    })
  }

  ngOnInit(): void {
    
    if( this.queryType === 'tipo' ){
      this.service.getActivoPorTipo( this.query ).subscribe((response:any) => {
        this.activos = response;
        this.sendingRequest = false;
      }, error => {
        if( error.error.message ){ this.alertsService.showError(error.error.message); }
        else{ this.alertsService.showError("Ha ocurrido un error, intente más tarde"); }
        this.sendingRequest = false;
      })
    }else if( this.queryType === 'serial' ){
      this.service.getActivoPorSerial( parseInt(this.query) ).subscribe((response:any) => {

        this.activos = [response];
        this.sendingRequest = false;
      }, error => {
        if( error.error.message ){ this.alertsService.showError(error.error.message); }
        else{ this.alertsService.showError("Ha ocurrido un error, intente más tarde"); }
        this.sendingRequest = false;
      })
    }else{
      this.service.getActivoPorFechaCompra( this.query ).subscribe((response:any) => {

        this.activos = response;
        this.sendingRequest = false;
      }, error => {
        if( error.error.message ){ this.alertsService.showError(error.error.message); }
        else{ this.alertsService.showError("Ha ocurrido un error, intente más tarde"); }
        this.sendingRequest = false;
      })
    }

  }

  regresar(): void{
    this.router.navigate(['home']);
  }

}
