import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiMercadolibreService } from 'src/app/services/api-mercadolibre.service';
import { constantes } from 'src/constants/constantes';
import { ApiCalculadoraService } from 'src/app/services/api-calculadora.service';

@Component({
  selector: 'app-formulario-viabilizacion',
  templateUrl: './formulario-viabilizacion.component.html',
  styleUrls: ['./formulario-viabilizacion.component.scss']
})
export class FormularioViabilizacionComponent implements OnInit {

  isLinear = false;
  primero: FormGroup;
  segundo: FormGroup;

  infoVehiculo: any;
  const = constantes;
  valorFinanciar: number;
  cuotaInicial: number;
  porcentaje: number = 10;
  valorCuota: number;
  resultadoCalculadora = {
    valorCuota: 0
  };


  constructor( private formBuilder: FormBuilder, private apiMercadolibre: ApiMercadolibreService, private calculadoraServicio: ApiCalculadoraService ) {
    this.crearFormularios();
    this.obtenerInfoVehiculo();
   }

  ngOnInit() {
  }

  crearFormularios() {
    this.primero = this.formBuilder.group({
      cuotaInicial: [0, [Validators.required, Validators.minLength(6)]],
      cuotas: [48]
    });

      this.primero.controls['cuotaInicial'].valueChanges.subscribe(value => {
      this.valorFinanciar = this.infoVehiculo.price;
      this.porcentaje = this.calculadoraServicio.calcularPorcentajeCuotaInicial(value, this.cuotaInicial);
      this.resultadoCalculadora = this.calculadoraServicio.calcularCuota(Number(this.primero.value.cuotas), this.valorFinanciar - value);
    });

    this.segundo = this.formBuilder.group({
      nombre: [''],
      tipoIdentificacion:[]
    });
  }

  obtenerInfoVehiculo() {
    this.apiMercadolibre.getInfoVehiculo(this.apiMercadolibre.idVehiculo)
    .subscribe((infoVehiculo) => {
      this.infoVehiculo = infoVehiculo;
      this.valorFinanciar = this.infoVehiculo.price;
      this.cuotaInicial = this.calculadoraServicio.cuotaInicial(this.infoVehiculo.price);
      this.primero.controls.cuotaInicial.setValue(this.cuotaInicial);
      this.valorFinanciar -= this.cuotaInicial;
    });

  }

  clickRadioCuota(value) {
    this.resultadoCalculadora.valorCuota = this.calculadoraServicio.calcularCuota(Number(value.path[3].innerText), this.valorFinanciar).valorCuota;
  }

}
