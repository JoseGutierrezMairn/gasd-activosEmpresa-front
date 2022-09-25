import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { InputComponentComponent } from './components/input-component/input-component.component';
import { HeaderComponent } from './components/header/header.component';
import { CrearActivoComponent } from './components/crear-activo/crear-activo.component';
import { APP_ROUTING } from './app.routes';
import { ActualizarActivoComponent } from './components/actualizar-activo/actualizar-activo.component';
import { ActivoCardComponent } from './components/activo-card/activo-card.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { ActivoInfoComponent } from './components/activo-info/activo-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    InputComponentComponent,
    HeaderComponent,
    CrearActivoComponent,
    ActualizarActivoComponent,
    ActivoCardComponent,
    ResultadosComponent,
    ActivoInfoComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
