import { Component } from '@angular/core';
import { ApiCalculadoraService } from 'src/app/services/api-calculadora.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-speedometer',
  templateUrl: './speedometer.component.html',
  styleUrls: ['./speedometer.component.scss']
})
export class SpeedometerComponent  {

    canvasWidth = 500;
    canvasHeight = 400;
    needleValue = 15;
    centralLabel = '';
    options = {
    hasNeedle: true,
    needleColor: '#bd1414',
    needleUpdateSpeed: 500,
    arcColors: ['#378FFD', 'orange', 'gray'],
    arcDelimiters: [25, 50, 75]
};

    periodo = new FormControl(48);
    informacionPagar: any;

  constructor(private calculadoraServicio: ApiCalculadoraService) {

    this.informacionPagar = this.calculadoraServicio.resultadoCalculadora.resultadoCuota[0];
    this.periodo.valueChanges.subscribe(value => this.cambioVelocimetro(value));
    this.cambioResultadoCalculadora();
  }

  cambioVelocimetro(value) {

    switch (value) {

        case 48:
        this.needleValue = 13;
        this.informacionPagar = this.calculadoraServicio.resultadoCalculadora.resultadoCuota[0];
        break;

        case 60:
        this.needleValue = 37;
        this.informacionPagar = this.calculadoraServicio.resultadoCalculadora.resultadoCuota[1];
        break;

        case 72:
        this.needleValue = 65;
        this.informacionPagar = this.calculadoraServicio.resultadoCalculadora.resultadoCuota[2];
        break;

        case 84:
        this.needleValue = 87;
        this.informacionPagar = this.calculadoraServicio.resultadoCalculadora.resultadoCuota[3];
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
