import { Component } from '@angular/core';

@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.component.html',
  styleUrls: ['./trabajo.component.css']
})
export class TrabajoComponent {

  scrollR(): void {
var scroll = document.getElementById('Scroll_Cards');
if (scroll) {
scroll.scrollLeft += 290;
}
  }
  scrollL(): void {
    var scroll = document.getElementById('Scroll_Cards');
    if (scroll) {
    scroll.scrollLeft -= 290;
    }
      }
}
