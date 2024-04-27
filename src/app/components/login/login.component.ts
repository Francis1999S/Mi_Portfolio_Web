import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { loginGuard } from 'src/app/guards/login.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mensaje: string = ' ';
  credenciales: any;
  constructor(private router: Router, public fb: FormBuilder, private dataService: DataService){
    this.credenciales = this.fb.group({
      user: [''],
      pass: [''],
    });
  }
  ngOnInit(): void {
    if ([loginGuard]) {
      this.XKl1PupBGLgHE9quJk6XwSB8pdSIfmj6imkudh();
    }
  }
LogIn(): void {
  this.mensaje = ' ';
  const button = document.getElementById('boton_login');
const input_user = document.getElementById('input_user_login');
const input_pass = document.getElementById('input_pass_login');
if(input_pass && input_user){
  input_user.style.borderColor = '#296d52';
  input_pass.style.borderColor = '#296d52';
}
if (this.credenciales.valid) {
  if (button) {
    button.style.display = 'none';
  }
  this.dataService.LogIn(this.credenciales.value).subscribe(
    respuesta => {
      if (respuesta.hasOwnProperty('VOKuPiADBLSW5D2a60VKZWcF0wfCSY4vwjPric')) {
        if (respuesta.VOKuPiADBLSW5D2a60VKZWcF0wfCSY4vwjPric) {
          this.dataService.SDvRecdF9uT5OR8V5vjGYP3hSwhfjDuZHHxLyW9jBXoi8uWApD0ITLAvWhPl67Rw = true;
          this.XKl1PupBGLgHE9quJk6XwSB8pdSIfmj6imkudh();
        } else {
          this.mensaje = 'Credenciales Incorrectas';
          if (button) {
            button.style.display = 'flex';
          }
        }
      }
    },
    error => {
      console.error('Error al enviar credenciales', error);
      // Manejar el error adecuadamente, mostrar un mensaje al usuario, etc.
      // console.log(this.userForm.value);
      this.mensaje = 'Error al enviar';
    }
  )
} else {
  this.mensaje = 'Campos Incompletos';
  if (this.credenciales.get('user').value === ''){
    if (input_user){
      input_user.style.borderColor = 'red';
    }
  }
  if (this.credenciales.get('pass').value === ''){
    if (input_pass){
      input_pass.style.borderColor = 'red';
    }
  }
}
}
navigateToHome() {
  this.router.navigate(['/']);
}
XKl1PupBGLgHE9quJk6XwSB8pdSIfmj6imkudh() {
  this.router.navigate(['/apPTkA2qDdLw5T2uKl0eDfW60AtxylvDdWI6QrWBuG7IFFyYVB0L4AtsPKZyEPHk']);
}
}
