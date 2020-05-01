import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiMercadolibreService {

  idVehiculo: string;

  constructor(private http: HttpClient) { }

  getInfoVehiculo(idVehiculo: string) {
    const url = `${environment.urlApi}${idVehiculo}`;
    return this.http.get(url);
}

}
