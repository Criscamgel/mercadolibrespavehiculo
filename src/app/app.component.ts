import { Component } from '@angular/core';
import { ApiMercadolibreService } from './services/api-mercadolibre.service';
import { constantes } from 'src/constants/constantes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /* urlVehiculo = document.referrer; */
  urlVehiculo: string = "https://articulo.tucarro.com.co/MCO-556685664-jeep-wrangler-sport-jl-36-4x4-aut-3p-2019-_JM#position=4&type=item&tracking_id=ee73cea6-5054-48fd-8a4d-65744d500f60";
  cargando = true;
  activarVistaError = false;

  constructor(private apiMercadolibre: ApiMercadolibreService) {
    this.obtenerIdVehiculo(this.urlVehiculo);
  }

  obtenerIdVehiculo(urlVehiculo) {
    const regexId = constantes.REGEX_ID;
    const id = urlVehiculo.match(regexId);

    if (id !== null || id !== undefined) {
      this.apiMercadolibre.idVehiculo =  `MCO${id[1]}`;
      this.cargando = false;
    } else {
      this.cargando = false;
      this.activarVistaError = true;
    }
  }
}
