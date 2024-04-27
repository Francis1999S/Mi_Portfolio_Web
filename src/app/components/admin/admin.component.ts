import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  Mensajes: any[] = [];
  ID: any;
  constructor(private dataService: DataService, private router: Router, public fb: FormBuilder) {
    this.ID = this.fb.group({
      id: [''],
    });
  }
  ngOnInit(): void {
    const Loader = document.getElementById('Loader_Background_Mensajes_Admin');
    if (Loader) {
      Loader.style.display = 'flex';
    }
    this.dataService.getMensajes().subscribe((data: any) => {
      this.Mensajes = data;
      if (Loader) {
        Loader.style.display = 'none';
      }
    })
  }
  eliminar(ID: string): void {
    const Loader = document.getElementById('Loader_Background_Mensajes_Admin');
    if (Loader) {
      Loader.style.display = 'flex';
    }
    this.ID.patchValue({ id: ID });
    this.dataService.borrarMensaje(this.ID.value).subscribe((data: any) => {
      this.ngOnInit();
    })
  }
  navigateToHome() {
    this.router.navigate(['/']);
  }
}
