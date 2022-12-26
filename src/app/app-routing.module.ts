import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupforstudentComponent } from './groupforstudent/groupforstudent.component';
import { StudentRegisterComponent } from './student-register/student-register.component';



const routes: Routes = [
  { path: 'student', component: StudentRegisterComponent },
  { path: 'group', component: GroupforstudentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
