import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/services/alerts.service';

@Component({
  selector: 'app-activo-info',
  templateUrl: './activo-info.component.html',
  styleUrls: ['./activo-info.component.css']
})
export class ActivoInfoComponent implements OnInit {

  activoInfo: any;

  constructor(
    private router: Router,
    private alertsService: AlertsService
  ) {
    const cadena = sessionStorage.getItem('activo') ;
    if( cadena != null ){ 
      this.activoInfo = JSON.parse(cadena); 
      sessionStorage.removeItem('activo')
    }
    else{ 
      this.alertsService.showError('No se ha encontrado ningun activo');
      this.router.navigate(['home']);
     }
    
   }

  ngOnInit(): void {
  }

  regresar():void{
    this.router.navigate(['home']);
  }

}
