import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViabilizaVehiculoComponent } from './components/vistas/viabiliza-vehiculo/viabiliza-vehiculo.component';
import { HttpClientModule } from '@angular/common/http';
import { EncabezadoComponent } from './components/shared/encabezado/encabezado.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { DetallesVehiculoComponent } from './components/detalles-vehiculo/detalles-vehiculo.component';
import { FormularioViabilizacionComponent } from './components/formulario-viabilizacion/formulario-viabilizacion.component';
import { MaterialModule } from 'src/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ViabilizaVehiculoComponent,
    EncabezadoComponent,
    FooterComponent,
    DetallesVehiculoComponent,
    FormularioViabilizacionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
