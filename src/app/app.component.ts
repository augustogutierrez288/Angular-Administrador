import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

interface CourseModel{
  id: FormControl<string | null>;
  name: FormControl<string | null>;
  comision: FormControl<string | null>;
  img: FormControl<string | null>;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'administrador';
  courseModel: FormGroup<CourseModel>;
  arrayCourses: any[] = [];
  constructor( private fb: FormBuilder){
    this.courseModel = this.fb.group({
      id:[''],
      name: [''],
      comision: [''],
      img: ['']
    });
  };

  onCourseForm(): void{
    this.arrayCourses.push(this.courseModel.value);
    console.table(this.arrayCourses)
  }

}
