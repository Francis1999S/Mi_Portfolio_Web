import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  constructor(public dataService: DataService) {}
  goToInicio(): void {
    var seccionDestino = document.getElementById('Seccion_Inicio');
    if (seccionDestino) {
      seccionDestino.scrollIntoView({ behavior: 'smooth' });
    }
  }
  goToTrabajo(): void {
    var seccionDestino = document.getElementById('Seccion_Trabajo');
    if (seccionDestino) {
      seccionDestino.scrollIntoView({ behavior: 'smooth' });
    }
  }
  goToAcercaDe(): void {
    var seccionDestino = document.getElementById('Seccion_Acerca-de-mi');
    if (seccionDestino) {
      seccionDestino.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
