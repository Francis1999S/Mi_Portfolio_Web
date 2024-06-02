import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trabajo3',
  templateUrl: './trabajo3.component.html',
  styleUrls: ['./trabajo3.component.css']
})
export class Trabajo3Component {
  constructor(private router: Router){}
  navigateToProject() {
    this.router.navigate(['/Proyectos']);
  }
  navigateTo(url: string) {
    window.open(url, '_blank');
  }
  scrollR(): void {
    var scroll = document.getElementById('Scroll_Projects_Cards');
    if (scroll) {
    scroll.scrollLeft += 300;
    }
      }
      scrollL(): void {
        var scroll = document.getElementById('Scroll_Projects_Cards');
        if (scroll) {
        scroll.scrollLeft -= 300;
        }
          }
}
