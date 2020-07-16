import { Component } from '@angular/core';
import { ApiMercadolibreService } from './services/api-mercadolibre.service';
import { constantes } from 'src/constants/constantes';
import { CentralesRiesgoService } from './services/centrales-riesgo.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
export class AppComponent {
  urlVehiculo = document.referrer;
  /* urlVehiculo: string = "https://articulo.tucarro.com.co/MCO-558397266-brilliance-2020-v3-_JM#promoted-items-new=0"; */
  activarVistaError = false;
  splash: boolean;

  constructor(public apiMercadolibre: ApiMercadolibreService, public centralesRiesgo: CentralesRiesgoService) {
    this.animasplash();
    this.centralesRiesgo.cargador = true;
    this.obtenerIdVehiculo(this.urlVehiculo);
  }

  obtenerIdVehiculo(urlVehiculo) {
    const regexId = constantes.REGEX_ID;
    const id = urlVehiculo.match(regexId);

    if (id == null ) {
      this.centralesRiesgo.cargador = false;
      this.apiMercadolibre.setSeleccionMensaje(1);
    } else {
      this.apiMercadolibre.idVehiculo =  `MCO${id[1]}`;
      setTimeout(() => {
        this.centralesRiesgo.cargador = false;
      }, 3000);
      
    }
  }

  animasplash() {
    this.splash = true;
    setTimeout(() => {
    this.splash = false;
    }, 2000);
  }
}

