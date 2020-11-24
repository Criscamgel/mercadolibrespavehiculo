import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScanparamsService {

  enriquecido = false;

  constructor(private route: ActivatedRoute) { }

  getParam() {
    this.route.queryParams.subscribe((data: any) => {
      if (data.fuente === 'enriquecido') {
        this.enriquecido = true;
      }
    });
  }
}
