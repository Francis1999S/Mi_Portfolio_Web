import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experimentos',
  templateUrl: './experimentos.component.html',
  styleUrls: ['./experimentos.component.css']
})
export class ExperimentosComponent {
  constructor(private router: Router){}
  navigateToProject() {
    this.router.navigate(['/Proyectos']);
  }
  navigateTo(url: string) {
    window.open(url, '_blank');
  }
  scrollR(): void {
    var scroll = document.getElementById('Scroll_Experiments_Cards');
    if (scroll) {
    scroll.scrollLeft += 300;
    }
      }
      scrollL(): void {
        var scroll = document.getElementById('Scroll_Experiments_Cards');
        if (scroll) {
        scroll.scrollLeft -= 300;
        }
          }
}
