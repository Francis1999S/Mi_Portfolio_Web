import { Component } from '@angular/core';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css']
})
export class AcercaDeMiComponent {
  navigateTo(url: string) {
    window.open(url, '_blank');
  }
  goToProjects(): void {
    var seccionDestino = document.getElementById('Seccion_Trabajo_Proyectos');
    if (seccionDestino) {
      seccionDestino.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
