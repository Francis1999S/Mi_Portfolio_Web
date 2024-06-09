import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {
  flag: boolean = false;
menu():void {
  var pop1 = document.getElementById('pop_1');
  var pop2 = document.getElementById('pop_2');
  var pop3 = document.getElementById('pop_3');
  var pop4 = document.getElementById('pop_4');
  var pop5 = document.getElementById('pop_5');
  var pop6 = document.getElementById('pop_6');
  var li1 = document.getElementById('li_Inicio');
  var li2 = document.getElementById('li_Trabajo');
  var li3 = document.getElementById('li_Acerca');
  var li4 = document.getElementById('li_Contacto');
  var li5 = document.getElementById('li_Proyectos');
  var li6 = document.getElementById('li_Experimentos');
  var ThreeD_menu = document.getElementById('3D_menu');
  var bar1 = document.getElementById('bar_menu_1');
  var bar2 = document.getElementById('bar_menu_2');
  var bar3 = document.getElementById('bar_menu_3');
  var menu = document.getElementById('Menu');
  if (menu && bar1 && bar2 && bar3 && li1 && li2 && li3 && li4 && li5 && li6 && ThreeD_menu && pop1 && pop2 && pop3 && pop4 && pop5 && pop6) {
    if (this.flag) {
      pop1.style.top = '-55px';
      pop2.style.top = '-55px';
      pop3.style.top = '-55px';
      pop4.style.top = '-55px';
      pop5.style.top = '-55px';
      pop6.style.top = '-55px';
      bar1.style.transform = 'translate(0, 0)';
      bar1.style.rotate = '0deg';
      bar2.style.width = '100%';
      bar3.style.transform = 'translate(0, 0)';
      bar3.style.rotate = '0deg';
      menu.style.height = '0px';
      setTimeout(function(){if (li1 && li2 && li3 && li4 && li5 && li6 && menu) {
        li1.style.transform = 'translate(150%,0)';
        li2.style.transform = 'translate(150%,0)';
        li3.style.transform = 'translate(150%,0)';
        li4.style.transform = 'translate(150%,0)';
        li5.style.transform = 'translate(150%,0)';
        li6.style.transform = 'translate(150%,0)';
        menu.style.display = 'none';
      }}, 500);

      this.flag = false;
    } else {
      menu.style.display = 'flex';
      setTimeout(function(){
        if (pop1 && pop2 && pop3 && pop4 && pop5 && pop6) {
        pop1.style.top = '42px';
        pop2.style.top = '103px';
        pop3.style.top = '164px';
        pop4.style.top = '227px';
        pop5.style.top = '288px';
        pop6.style.top = '349px';
    }},100);
      ThreeD_menu.style.transform = 'rotateY(0deg)';
      setTimeout(function(){if (li1 && li2 && li3 && li4 && li5 && li6) {
        li1.style.transform = 'translate(0,0)';
        li2.style.transform = 'translate(0,0)';
        li3.style.transform = 'translate(0,0)';
        li4.style.transform = 'translate(0,0)';
        li5.style.transform = 'translate(0,0)';
        li6.style.transform = 'translate(0,0)';
      }}, 500);
      setTimeout(function(){if (ThreeD_menu) {
        ThreeD_menu.style.transform = 'rotateY(-25deg)';
      }}, 1000);
      bar1.style.transform = 'translate(7px, 9px)';
      bar1.style.rotate = '45deg';
      bar2.style.width = '0';
      bar3.style.transform = 'translate(7px, -9px)';
      bar3.style.rotate = '-45deg';
      setTimeout(function() {if (menu) {
        menu.style.height = '420px';
      }}, 100);
      this.flag = true;
    }
  }
}
}
