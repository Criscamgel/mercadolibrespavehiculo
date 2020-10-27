import { Component, OnInit } from '@angular/core';
import { ApiMercadolibreService } from 'src/app/services/api-mercadolibre.service';
import { constantes } from 'src/constants/constantes';
import { animate, state, style, transition, trigger } from '@angular/animations';

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

  constructor(public apiMercadolibre: ApiMercadolibreService) {
    this.obtenerInfoVehiculo();
   }

  obtenerInfoVehiculo() {
    /* if ( this.apiMercadolibre.idVehiculo == undefined || this.apiMercadolibre.idVehiculo == null ){
      this.apiMercadolibre.obtenerIdVehiculo();
    } else { */
    this.apiMercadolibre.getInfoVehiculo(this.apiMercadolibre.idVehiculo)
    .subscribe(infoVehiculo => {
      this.infoVehiculo = infoVehiculo;
      constantes.idInformacion.forEach((item, index) => {
        const propiedad = {nombre: '', valor: ''};
        propiedad.nombre = item;
        propiedad.valor = this.obtenerNombreValue(item);
        this.informacion.push(propiedad);
        });
      this.apiMercadolibre.infoVehiculo = this.infoVehiculo;
    }, ( error ) => {
        this.apiMercadolibre.errorApi = true;
    });
    /* } */
  }

  obtenerNombreValue(nameTexto: string) {
    const objeto = this.infoVehiculo.attributes.find((item: any) => item.name === nameTexto);
    return objeto.value_name;
  }

}
