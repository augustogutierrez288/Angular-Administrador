import { Component } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})

export class AsideComponent {
  buttonsAside: string[] = ['Cursos', 'Comprar cursos', 'Servicios especiales', 'Ajuste', 'Cerro Sesion'];

}
