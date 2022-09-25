import Swal from 'sweetalert2'

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AlertsService {



    showError( msg: string ):void{        
        Swal.fire({
            title: 'Error',
            text: msg,
            icon: 'error',
            confirmButtonText: 'Aceptar'
          })
    }

    showSuccess( msg: string ): void{
        Swal.fire({
            title: 'Activo guardado',
            text: msg,
            icon: 'success',
            confirmButtonText: 'Aceptar'
          })
    }

}