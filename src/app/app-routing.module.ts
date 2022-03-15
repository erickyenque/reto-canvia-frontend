import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './sections/add-user/add-user.component';
import { CatComponent } from './sections/cat/cat.component';
import { HomeComponent } from './sections/home/home.component';
import { UpdateUserComponent } from './sections/update-user/update-user.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'create', component: AddUserComponent },
  { path: 'update/:id', component: UpdateUserComponent },
  { path: 'cat', component: CatComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
