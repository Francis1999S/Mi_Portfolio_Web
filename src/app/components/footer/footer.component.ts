import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  navigateTo(url: string) {
    window.open(url, '_blank');
  }
  goToInicio(): void {
    var seccionDestino = document.getElementById('Seccion_Inicio');
    if (seccionDestino) {
      seccionDestino.scrollIntoView({ behavior: 'smooth' });
    }
  }
  goToAcercaDeMI(): void {
    var seccionDestino = document.getElementById('Seccion_Acerca-de-mi');
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
  goToProjects(): void {
    var seccionDestino = document.getElementById('Seccion_Trabajo_Proyectos');
    if (seccionDestino) {
      seccionDestino.scrollIntoView({ behavior: 'smooth' });
    }
  }
  goToExperiments(): void {
    var seccionDestino = document.getElementById('Seccion_Experimentos');
    if (seccionDestino) {
      seccionDestino.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
