import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ViewNoteComponent } from './view-note/view-note.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'note', component: ViewNoteComponent },
  { path: 'register', component: RegisterComponent }
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
