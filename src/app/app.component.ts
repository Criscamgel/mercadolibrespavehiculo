import { Component, OnInit } from '@angular/core';
import { ApiMercadolibreService } from './services/api-mercadolibre.service';
import { constantes } from 'src/constants/constantes';
import { CentralesRiesgoService } from './services/centrales-riesgo.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';

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
export class AppComponent implements OnInit {
  urlVehiculo = document.referrer;
  /* urlVehiculo: string = "https://articulo.tucarro.com.co/MCO-558397266-brilliance-2020-v3-_JM#promoted-items-new=0"; */
  activarVistaError = false;
  splash: boolean;

  constructor(public apiMercadolibre: ApiMercadolibreService,
              public centralesRiesgo: CentralesRiesgoService,
              private route: ActivatedRoute) {
  }

  public ngOnInit() {
    this.apiMercadolibre.obtenerIdVehiculo(this.urlVehiculo);
    this.animasplash();
    this.centralesRiesgo.cargador = true;
  }

  animasplash() {
    this.splash = true;
    setTimeout(() => {
    this.splash = false;
    }, 2000);
  }
}

