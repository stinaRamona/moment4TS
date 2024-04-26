import { Component } from '@angular/core';
import { Courseinfo } from '../models/courseinfo';
import { CoursesService } from '../services/courses.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mycourses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mycourses.component.html',
  styleUrl: './mycourses.component.css'
})
export class MycoursesComponent {

  //kurser sparas och initieras till tom array 
  courses: Courseinfo[] = [];  

  constructor(private coursesService: CoursesService) { }

  ngOnInit(){
    this.coursesService.getCourses().subscribe((courses) => {
      this.courses = courses
    })
  }
}
