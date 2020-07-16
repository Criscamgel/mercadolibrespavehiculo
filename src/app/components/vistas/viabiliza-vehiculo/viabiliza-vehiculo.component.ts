import { Component, OnInit } from '@angular/core';
import { ApiMercadolibreService } from 'src/app/services/api-mercadolibre.service';
import { constantes } from 'src/constants/constantes';

@Component({
  selector: 'app-viabiliza-vehiculo',
  templateUrl: './viabiliza-vehiculo.component.html',
  styleUrls: ['./viabiliza-vehiculo.component.scss']
})
export class ViabilizaVehiculoComponent implements OnInit {

  const = constantes;

  constructor( public apiMercadolibre: ApiMercadolibreService ) { }

  ngOnInit() {
  }

}
