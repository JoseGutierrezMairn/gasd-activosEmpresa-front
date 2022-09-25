import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class ActivoService {


    constructor( 
        private httpClient: HttpClient
        ) { }

    getQuery(query: string): string{
        const url = `http://localhost:8080/api/v1/activo${query}`;
        return url;
    }

    getActivoPorTipo(tipo: string){
        return this.httpClient.get( this.getQuery(`/porTipo/?tipo=${tipo}`) );
    }

    getActivoPorSerial(serial: number){
        return this.httpClient.get( this.getQuery(`/porSerial/?serial=${serial}`) );
    }

    getActivoPorFechaCompra(fechaCompra: string){
        return this.httpClient.get( this.getQuery(`/porFechaCompra/?fechaCompra=${fechaCompra}`) );
    }

    createActivo(activo: any){
        return this.httpClient.post(this.getQuery('/crearActivo'), activo);
    }

    updateActivo(activo: any){
        return this.httpClient.put(this.getQuery('/actualizarActivo'), activo);
    }


  }