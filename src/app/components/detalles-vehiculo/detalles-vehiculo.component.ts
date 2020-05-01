import { Component, OnInit } from '@angular/core';
import { ApiMercadolibreService } from 'src/app/services/api-mercadolibre.service';

@Component({
  selector: 'app-detalles-vehiculo',
  templateUrl: './detalles-vehiculo.component.html',
  styleUrls: ['./detalles-vehiculo.component.scss']
})
export class DetallesVehiculoComponent  {

  infoVehiculo: any;
  informacion: any = {
    marca: "",
    modelo:"",
    version: "",
    anio: 0,
    cilindrada: "",
    kilometros: ""
  };

  constructor(private apiMercadolibre: ApiMercadolibreService) {
    this.obtenerInfoVehiculo();
   }

  obtenerInfoVehiculo() {
    this.apiMercadolibre.getInfoVehiculo(this.apiMercadolibre.idVehiculo)
    .subscribe(infoVehiculo => {
      this.infoVehiculo = infoVehiculo;
      this.informacion.marca = this.obtenerNombreValue('BRAND');
      this.informacion.modelo = this.obtenerNombreValue('MODEL');
      this.informacion.version = this.obtenerNombreValue('TRIM');
      this.informacion.anio = this.obtenerNombreValue('VEHICLE_YEAR');
      this.informacion.cilindrada = this.obtenerNombreValue('ENGINE_DISPLACEMENT');
      this.informacion.kilometros = this.obtenerNombreValue('KILOMETERS');
    });
  }

  obtenerNombreValue(idTexto: string) {
    const objeto = this.infoVehiculo.attributes.find(item => item.id === idTexto);
    return objeto.value_name;
  }

}
