import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { MealsAdminComponent } from './meals-admin/meals-admin.component';
import { ExercisesAdminComponent } from './exercises-admin/exercises-admin.component';
import { NewMealModComponent } from './new-meal-mod/new-meal-mod.component';
import { NewExerciseModComponent } from './new-exercise-mod/new-exercise-mod.component';
import { PatchWeightUserComponent } from './patch-weight-user/patch-weight-user.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'meals', component: MealsAdminComponent },
  { path: 'exercises', component: ExercisesAdminComponent },
  { path: 'meals/new', component: NewMealModComponent },
  { path: 'exercises/new', component: NewExerciseModComponent },
  { path: 'user/weight', component: PatchWeightUserComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
