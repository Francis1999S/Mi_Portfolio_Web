import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mensaje, ID, Cred } from './objetos';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  isPageLoaded = false;
  SDvRecdF9uT5OR8V5vjGYP3hSwhfjDuZHHxLyW9jBXoi8uWApD0ITLAvWhPl67Rw: boolean = false;
  flag_contacto: boolean = false;
  apiUrl: string = 'https://francis-seura.ar/';
  constructor(private http: HttpClient) { }

//*************************************************************//
//*************************************************************//
//**************METODOS DE BASE DE DATOS (TOP)*****************//
//*************************************************************//
//*************************************************************//

getMensajes(): Observable<any> {
  return this.http.get(this.apiUrl + "method.php?consultar=1");
}

enviarMensaje(data: Mensaje): Observable<any> {
  return this.http.post(this.apiUrl + "method.php?insertar=1", data);
}

borrarMensaje(data: ID): Observable<any> {
  return this.http.post(this.apiUrl + "method.php?borrar_mensaje=1", data);
}

LogIn(data: Cred): Observable<any> {
  return this.http.post(this.apiUrl + "sesion.php?LogIn=1", data);
}

//*************************************************************//
//*************************************************************//
//************METODOS DE BASE DE DATOS (BOTTOM)****************//
//*************************************************************//
//*************************************************************//

  contacto(): void{
    var contacto = document.getElementById('Contacto_Window');
    var contacto2 = document.getElementById('Contacto_window_3DEXF');
    var background = document.getElementById('background_contacto_id');
    if (contacto && contacto2 && background) {
      if (this.flag_contacto) {
        background.style.backgroundColor = 'rgba(0,0,0,0)';
        contacto2.style.transform = 'rotateY(-90deg)';
        setTimeout(function(){if(contacto && contacto2){
          contacto2.style.transform = 'rotateY(90deg)';
          contacto.style.display = 'none';
        }}, 500);
        this.flag_contacto = false;
      } else {
  contacto.style.display = 'flex';
  setTimeout(function(){if(contacto2 && background){
    background.style.backgroundColor = 'rgba(0,0,0,0.8)';
    contacto2.style.transform = 'rotateY(0deg)';
  }}, 100);
  this.flag_contacto = true;
      }
    }
  }
}
