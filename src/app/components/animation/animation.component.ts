import { Component } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent {
  Counter: number = 0;
  constructor(private router: Router){}
  Videos(): void {
    var Fotos = document.getElementById('68454w54dw');
    var Videos = document.getElementById('165awa153as');
    if (Fotos && Videos) {
      Videos.style.display = 'flex';
      Fotos.style.display = 'none';
    }
  }
Fotos(): void {
  var Fotos = document.getElementById('68454w54dw');
  var Videos = document.getElementById('165awa153as');
  if (Fotos && Videos) {
    Videos.style.display = 'none';
    Fotos.style.display = 'flex';
  }
}
ToLogIn(): void {
  this.Counter += 1;
  console.log('Counter: ', this.Counter);
  if (this.Counter > 4) {
    this.navigateToLogin();
  }
}
navigateToLogin() {
  this.router.navigate(['/login']);
}
}
