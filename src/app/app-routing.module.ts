import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {} from './app.module'
import { MyResumeComponent } from './container/my-resume/my-resume.component';

const routes: Routes = [
  {
    path: 'myResume',
    component: MyResumeComponent,
  },

  { path: '**', redirectTo: 'myResume', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
