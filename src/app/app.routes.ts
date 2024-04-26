import { Routes } from '@angular/router';
import { MycoursesComponent } from './mycourses/mycourses.component';

export const routes: Routes = [
    { path: "mycourses", component: MycoursesComponent },
    { path: "", redirectTo: "mycourses", pathMatch: 'full'}
];
