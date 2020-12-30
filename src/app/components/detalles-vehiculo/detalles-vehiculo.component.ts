import { Component, OnInit } from '@angular/core';
import { ApiMercadolibreService } from 'src/app/services/api-mercadolibre.service';
import { constantes } from 'src/constants/constantes';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CentralesRiesgoService } from 'src/app/services/centrales-riesgo.service';

@Component({
  selector: 'app-detalles-vehiculo',
  templateUrl: './detalles-vehiculo.component.html',
  styleUrls: ['./detalles-vehiculo.component.scss'],
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
export class DetallesVehiculoComponent  {

  infoVehiculo: any;
  informacion: any = [];

  constructor(public apiMercadolibre: ApiMercadolibreService,
              public centralesRiesgo: CentralesRiesgoService
    ) {
    setTimeout(() => {
    if (this.apiMercadolibre.idVehiculo) {
          this.obtenerInfoVehiculo();
    }
    }, 200);
   }

  obtenerInfoVehiculo() {
    this.apiMercadolibre.getInfoVehiculo(this.apiMercadolibre.idVehiculo)
    .subscribe(infoVehiculo => {
      this.apiMercadolibre.infoVehiculo = this.infoVehiculo;
      this.infoVehiculo = infoVehiculo;
      constantes.idInformacion.forEach((item, index) => {        
        const propiedad = {nombre: '', valor: ''};
        propiedad.nombre = item;
        propiedad.valor = this.obtenerNombreValue(item);
        this.informacion.push(propiedad);
        });
    }, ( error ) => {
        this.apiMercadolibre.errorApi = true;
    });
  }

  obtenerNombreValue(nameTexto: string) {
    const objeto = this.infoVehiculo.attributes.find((item: any) => item.name === nameTexto);
    if(nameTexto == 'Modelo'){
      this.centralesRiesgo.modeloCarro = objeto.value_name
    }
    return objeto.value_name;
  }

}
