import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { constantes } from 'src/constants/constantes';
import { CentralesRiesgoService } from './centrales-riesgo.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiMercadolibreService {

  idVehiculo: string;
  infoVehiculo = [];
  mostrarModalTyc = false;
  errorApi = false;
  desaparecerDetallesMobile = false;
  numeroError: number;

  constructor(public http: HttpClient,
              public centralesRiesgo: CentralesRiesgoService,
              private route: ActivatedRoute
    ) { }

    obtenerIdVehiculo() {
      /* const regexId = constantes.REGEX_ID;
      const id = urlVehiculo.match(regexId); */
  
      this.route.queryParams.subscribe((data: any) => {
        /* console.log(data.idvehiculo); */
        if (data.idvehiculo !== undefined || data.idvehiculo !== null) {
          this.idVehiculo =  data.idvehiculo;
          /* this.getInfoVehiculo(this.idVehiculo); */
          setTimeout(() => {
            this.centralesRiesgo.cargador = false;
          }, 3000);
        } else {
          this.centralesRiesgo.cargador = false;
          this.setSeleccionMensaje(1);
        }
      });

    }

  getInfoVehiculo(idVehiculo: string) {
      if (idVehiculo == undefined || idVehiculo == null){
        this.obtenerIdVehiculo();
      } else {
      const url = `${environment.urlApi}${idVehiculo}`;
      return this.http.get(url);
      }
  }

  volverNavegador() {
    if (window.history.go(-1) !== undefined) {
    window.history.go(-1);
    } else {
      window.location.href = constantes.redirectMercadolibre;
    }
  }

  setSeleccionMensaje(value) {
    this.numeroError = value;
    /* this.errorApi = true; */
  }

}
