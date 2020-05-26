import { Component, OnInit } from '@angular/core';
import { constantes } from 'src/constants/constantes';
import { FormularioViabilizacionComponent } from 'src/app/components/formulario-viabilizacion/formulario-viabilizacion.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ApiMercadolibreService } from 'src/app/services/api-mercadolibre.service';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.scss'],
  animations: [
    trigger('animationFadeOut', [
      transition(':enter', [
        style({ opacity: '1' }),
        animate(300)
      ]),
      transition(':leave', [
        animate(300, style({ opacity: '0' }))
      ]),
      state('*', style({ opacity: '1' })),
    ])
  ]
})
export class RespuestaComponent implements OnInit {

  const = constantes;

  constructor(public formularioViable: FormularioViabilizacionComponent, public apiMercadolibre: ApiMercadolibreService) {
  }

  ngOnInit() {
  }

}
