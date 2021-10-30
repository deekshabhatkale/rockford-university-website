import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { FacultyComponent } from './faculty/faculty.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './NotFound.component';
const routes: Routes = [
  {path:'registration',component:RegistrationComponent},
  {path:'contact',component:ContactComponent},
  {path:'',component:HomeComponent},
  {path:'faculty',component:FacultyComponent},
  {path:'courses',component:CoursesComponent},
  {path:'newsletter',component:NewsletterComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
