import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { constantes } from 'src/constants/constantes';

@Injectable({
  providedIn: 'root'
})
export class ApiMercadolibreService {

  idVehiculo: string;
  infoVehiculo = [];
  mostrarModalTyc = false;
  errorApi = false;
  desaparecerDetallesMobile = false;

  constructor(private http: HttpClient) { }

  getInfoVehiculo(idVehiculo: string) {
    const url = `${environment.urlApi}${idVehiculo}`;
    return this.http.get(url);
}

  volverNavegador() {
    
    if (window.history.go(-1) !== undefined) {
    window.history.go(-1);
    } else {
      window.location.href = constantes.redirectMercadolibre;
    }
  }

}
