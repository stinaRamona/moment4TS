import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Courseinfo } from '../models/courseinfo';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  //spara url i en variabel 
  url : string = "https://webbutveckling.miun.se/files/ramschema_ht23.json"
  

  constructor(private http: HttpClient) { }
  
  //Hämtar in kurserna från webbtjänsten 
  getCourses(): Observable<Courseinfo[]> {
    return this.http.get<Courseinfo[]>(this.url)
  }
}
