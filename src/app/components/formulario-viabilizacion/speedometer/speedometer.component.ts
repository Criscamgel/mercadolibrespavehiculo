import { Component } from '@angular/core';
import { ApiCalculadoraService } from 'src/app/services/api-calculadora.service';
import { FormControl } from '@angular/forms';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { constantes } from 'src/constants/constantes';
import { CentralesRiesgoService } from 'src/app/services/centrales-riesgo.service';

@Component({
  selector: 'app-speedometer',
  templateUrl: './speedometer.component.html',
  styleUrls: ['./speedometer.component.scss']
})
export class SpeedometerComponent  {

    canvasWidth = 400;
    canvasHeight = 100;
    needleValue = 15;
    centralLabel = '';
    const = constantes;
    options = {
    hasNeedle: true,
    needleColor: '#bd1414',
    needleUpdateSpeed: 500,
    arcColors: ['transparent']
};

    periodo = new FormControl(48);
    informacionPagar: any;

  constructor(public calculadoraServicio: ApiCalculadoraService, 
    public breakpointObserver: BreakpointObserver, public centralesRiesgo: CentralesRiesgoService) {

    this.informacionPagar = this.calculadoraServicio.resultadoCalculadora.resultadoCuota[0];
    this.periodo.valueChanges.subscribe(value => this.cambioVelocimetro(value));
    this.cambioResultadoCalculadora();

    breakpointObserver.observe([
      '(max-width: 576px)'
        ]).subscribe(result => {
          if (result.matches) {
            this.canvasWidth = 270;
            this.canvasHeight = 200;
          }
        });

    }
    

  cambioVelocimetro(value) {

    switch (value) {

        case 48:
        this.needleValue = 13;
        this.informacionPagar = this.calculadoraServicio.resultadoCalculadora.resultadoCuota[0];
        this.centralesRiesgo.plazo = 4;
        break;

        case 60:
        this.needleValue = 37;
        this.informacionPagar = this.calculadoraServicio.resultadoCalculadora.resultadoCuota[1];
        this.centralesRiesgo.plazo = 5;
        break;

        case 72:
        this.needleValue = 65;
        this.informacionPagar = this.calculadoraServicio.resultadoCalculadora.resultadoCuota[2];
        this.centralesRiesgo.plazo = 6;
        break;

        case 84:
        this.needleValue = 87;
        this.informacionPagar = this.calculadoraServicio.resultadoCalculadora.resultadoCuota[3];
        this.centralesRiesgo.plazo = 7;
        break;
    
      default:
        break;
    }
    
  }
  cambioResultadoCalculadora() {
    this.calculadoraServicio.observablResultadoCalculadora.subscribe(() => {
      this.cambioVelocimetro(this.periodo.value);
    });
  }

}
