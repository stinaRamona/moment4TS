import { Component } from '@angular/core';
import { Courseinfo } from '../models/courseinfo';
import { CoursesService } from '../services/courses.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mycourses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mycourses.component.html',
  styleUrl: './mycourses.component.css'
})
export class MycoursesComponent {

  //kurser sparas och initieras till tom array 
  courses: Courseinfo[] = [];
  //efter filtrering sparas de också i denna  
  filteredCourses: Courseinfo[] = []; 
  //för det som skrivs in i inputfältet 
  filtervalue: string = "" 

  constructor(private coursesService: CoursesService) { }

  ngOnInit(){
    this.coursesService.getCourses().subscribe((courses) => {
      this.courses = courses
      this.filteredCourses = courses
    })
  }

  applyFilter(): void {
    //filtrerar kurskod och kursnamn
    this.filteredCourses = this.courses.filter((course)=>
      course.code.toLowerCase().includes(this.filtervalue.toLowerCase()) ||
      course.coursename.toLowerCase().includes(this.filtervalue.toLowerCase())   
    )
  } 

  //För att sortera kurser vid click 
  sortCourseCode(){
    this.courses.sort((a, b) => (a.code > b.code) ? 1 : -1)
  } 

  sortCourseName(){
    this.courses.sort((a, b) => (a.coursename > b.coursename) ? 1 : -1)
  } 

  sortCourseProgression(){
    this.courses.sort((a, b) => (a.progression > b.progression) ? 1 : -1)
  }
}
