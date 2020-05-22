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
  /* urlVehiculo = document.referrer; */
  urlVehiculo: string = "https://articulo.tucarro.com.co/MCO-556685664-jeep-wrangler-sport-jl-36-4x4-aut-3p-2019-_JM#position=4&type=item&tracking_id=ee73cea6-5054-48fd-8a4d-65744d500f60";
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

    if (id !== null || id !== undefined) {
      this.apiMercadolibre.idVehiculo =  `MCO${id[1]}`;
      this.centralesRiesgo.cargador = false;
    } else {
      this.centralesRiesgo.cargador = false;
      this.activarVistaError = true;
    }
  }

  animasplash() {
    this.splash = true;
    setTimeout(() => {
    this.splash = false;
    }, 2000);
  }
}

