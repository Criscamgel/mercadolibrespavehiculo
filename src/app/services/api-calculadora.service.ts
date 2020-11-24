import { Injectable } from '@angular/core';
import { constantes } from 'src/constants/constantes';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ResultadoCalculadora } from '../interfaces/resultado-calculadora';

@Injectable({
  providedIn: 'root'
})
export class ApiCalculadoraService {

  public observablResultadoCalculadora: any;
  resultadoCalculadora: ResultadoCalculadora = {
    resultadoCuota: []
  };

  constructor() {
    this.observablResultadoCalculadora = new BehaviorSubject<any>(this.resultadoCalculadora);
   }

  cuotaInicial(valor: number) {
    return valor * 0.1;
  }

  calcularCuota(cuotas: any, valor: number, porcentaje: number) {
    this.limpiarResultado();
    const nmv = constantes.tasa;
    cuotas.forEach((cuota, index) => {
      const seguroTotal = (valor * (1220 / 1000000)) * cuota;

      const vlrPartuno = valor * nmv;
      let vlrPartdos = Math.pow((1 + nmv), - cuota);
      vlrPartdos = 1 - vlrPartdos;
      let valorCuota = Math.round(vlrPartuno / vlrPartdos);
      valorCuota = (Math.round(valorCuota));

      /* Seguro de la cuota */
      const vlrPartunoSeg = seguroTotal * nmv;
      let vlrPartdosSeg = Math.pow((1 + nmv), - cuota);
      vlrPartdosSeg = 1 - vlrPartdosSeg;
      let seguroTotalCuota = Math.round(vlrPartunoSeg / vlrPartdosSeg);
      seguroTotalCuota = Math.round(seguroTotalCuota);

      /* Igualando */
      const resultado = {
        cuota,
        nombre: constantes.nombreCuotas[index],
        nmv,
        valorCuota,
        valorFinalSeguroTotal: seguroTotalCuota * cuota,
        valorCuotaSeguro: valorCuota + seguroTotalCuota,
        valorTotalSeguro: seguroTotalCuota,
        valorTotalFinanciar: valor
      };
      if (resultado.cuota) {
      this.resultadoCalculadora.resultadoCuota.push(resultado);
      }
    });
    this.observablResultadoCalculadora.next(this.resultadoCalculadora);
    return this.resultadoCalculadora;
  }

  limpiarResultado() {
    this.resultadoCalculadora = {resultadoCuota: []};
  }

  calcularPorcentajeCuotaInicial(value: number, cuotaInicial: number) {
    return (value * 10) / cuotaInicial;
  }
}
