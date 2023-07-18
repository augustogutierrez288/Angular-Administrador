import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  titleCourses : string = 'Cursos';
  titlePayCourses : string = 'Comprar cursos';
  titleServices : string = 'Servicios especiales';
  titleSetting  : string = 'Ajustes';
  titleLogaut : string = 'Cerrar Sesion';

  courses: { id: number, name: string, img: string }[] = [
    { id: 1, name: 'Javascript inicial', img: '../../assets/js.png' },
    { id: 2, name: 'Javascript intermedio', img: '../../assets/js.png' },
    {id: 3, name: 'Javascript avanzado', img: '../../assets/js.png'},
    {id: 4, name: 'Java', img: '../../assets/java.png'},
    {id: 5, name: 'Python', img: '../../assets/piton.png'},
    {id: 6, name: 'Desarrollo Mobile Kotlin', img: '.../../assets/Kotlin_Icon.svg.png'},
  ];
}
