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
}
