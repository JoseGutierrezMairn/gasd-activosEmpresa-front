import { RouterModule, Routes } from '@angular/router';
import { ActivoInfoComponent } from './components/activo-info/activo-info.component';
import { ActualizarActivoComponent } from './components/actualizar-activo/actualizar-activo.component';
import { ContainerComponent } from './components/container/container.component';
import { CrearActivoComponent } from './components/crear-activo/crear-activo.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
const APP_ROUTES: Routes = [
{
    path: 'home',
    component: ContainerComponent
},
{
   path: 'crearActivo',
   component: CrearActivoComponent
},
{
    path: 'actualizarActivo',
    component: ActualizarActivoComponent
 },
 {
   path: 'resultados/:q/:param',
   component: ResultadosComponent
},
{
   path: 'infoActivo',
   component: ActivoInfoComponent
},
{
   path: '**',
   pathMatch: 'full',
   redirectTo: 'home'
}
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);