import { Injectable } from '@angular/core';
import { constantes } from 'src/constants/constantes';

@Injectable({
  providedIn: 'root'
})
export class ApiCalculadoraService {

  resultadoCalculadora = {
    valorCuota : 0,
    valorCuotaSeguro: 0,
    valorTotalSeguro: 0,
    valorTotalFinanciar: 0
  };

  constructor() { }

  cuotaInicial(valor: number) {
    return valor * 0.1;
  }

  calcularCuota(cuota: number, valor: number) {

    const nmv = Math.pow((1 + constantes.tasa), (1 / 12)) - 1;
    const seguroCuota = (1200 / 1000000) * valor;

    const seguroTotal  = Math.round(seguroCuota * cuota);
    const vlrActual = Math.round(valor);
    const vlrPartuno = vlrActual * nmv;
    let vlrPartdos = Math.pow((1 + nmv), - cuota);
    vlrPartdos = 1 - vlrPartdos;
    const valorCuota = Math.round(vlrPartuno / vlrPartdos);

    /* Seguro de la cuota */
    const vlrPartunoSeg = seguroTotal * nmv;
    let vlrPartdosSeg = Math.pow((1 + nmv), - cuota);
    vlrPartdosSeg = 1 - vlrPartdosSeg;
    let seguroTotalCuota = (Math.round(vlrPartunoSeg) / vlrPartdosSeg);
    seguroTotalCuota = Math.round(seguroTotalCuota);

    /* Igualando */
    this.resultadoCalculadora.valorCuota = valorCuota;
    this.resultadoCalculadora.valorCuotaSeguro = valorCuota + seguroTotalCuota;
    this.resultadoCalculadora.valorTotalSeguro = seguroTotalCuota;
    this.resultadoCalculadora.valorTotalFinanciar = seguroTotalCuota + valor;

    console.log(this.resultadoCalculadora);
    return this.resultadoCalculadora;
  }

  calcularPorcentajeCuotaInicial(value: number, cuotaInicial: number) {
    return (value * 10) / cuotaInicial;
  }
}
