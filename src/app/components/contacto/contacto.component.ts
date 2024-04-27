import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  mensaje: any;
  constructor(public dataService: DataService, public fb: FormBuilder){
    this.mensaje = this.fb.group({
      nombre: [''],
      mensaje: [''],
      telefono: [''],
      email: [''],
      fecha: [''],
    });
  }
  enviarMensaje():void {
    const Loader = document.getElementById('Loader_caja_mensajes');
    const Submit = document.getElementById('Boton_enviar_mensaje');
    if (Submit && Loader) {
      Submit.style.display = 'none';
      Loader.style.display = 'flex';
    }
    const fechaHoy = new Date().toISOString().split('T')[0];
    this.mensaje.patchValue({ fecha: fechaHoy });
    if (this.mensaje.valid) {
    this.dataService.enviarMensaje(this.mensaje.value).subscribe((data: any) => {
      var mensaje = document.getElementById('Mensaje_de_exito');
      var form = document.getElementById('formulario_mensaje');
      if (mensaje && form && Loader) {
        Loader.style.display = 'none';
        form.style.display = 'none';
        mensaje.style.display = 'flex';
      }
    })
  } else {
    if (Submit && Loader) {
      Submit.style.display = 'flex';
      Loader.style.display = 'none';
    }
    if ((this.mensaje.get('nombre').value === '')) {
      var input1 = document.getElementById('Input_mensaje_nombre');
      if (input1) {
        input1.style.borderColor = 'red';
      }
    } else {
      var input1 = document.getElementById('Input_mensaje_nombre');
      if (input1) {
        input1.style.borderColor = '#296d52';
      }
    }
    if ((this.mensaje.get('mensaje').value === '')) {
      var input2 = document.getElementById('Input_mensaje_mensaje');
      if (input2) {
        input2.style.borderColor = 'red';
      }
    } else {
      var input2 = document.getElementById('Input_mensaje_mensaje');
      if (input2) {
        input2.style.borderColor = '#296d52';
      }
    }
    if ((this.mensaje.get('telefono').value === '')) {
      var input3 = document.getElementById('Input_mensaje_numero');
      if (input3) {
        input3.style.borderColor = 'red';
      }
    } else {
      var input3 = document.getElementById('Input_mensaje_numero');
      if (input3) {
        input3.style.borderColor = '#296d52';
      }
    }
  }
  }    
}
