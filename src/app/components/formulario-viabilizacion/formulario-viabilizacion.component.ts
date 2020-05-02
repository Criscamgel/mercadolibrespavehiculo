import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-viabilizacion',
  templateUrl: './formulario-viabilizacion.component.html',
  styleUrls: ['./formulario-viabilizacion.component.scss']
})
export class FormularioViabilizacionComponent implements OnInit {

  isLinear = false;
  primero: FormGroup;
  segundo: FormGroup;

  constructor( private formBuilder: FormBuilder ) {
    this.crearFormularios();
   }

  ngOnInit() {
  }

  crearFormularios() {
    this.primero = this.formBuilder.group({
      cuotaInicial: ['']
    });

    this.segundo = this.formBuilder.group({
      nombre: ['']
    });
  }

}
