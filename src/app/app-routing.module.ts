import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MealsAdminComponent } from './meals-admin/meals-admin.component';
import { ExercisesAdminComponent } from './exercises-admin/exercises-admin.component';
import { NewMealModComponent } from './new-meal-mod/new-meal-mod.component';
import { NewExerciseModComponent } from './new-exercise-mod/new-exercise-mod.component';
import { PatchWeightUserComponent } from './patch-weight-user/patch-weight-user.component';
import { TodayUserComponent } from './today-user/today-user.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'meals', component: MealsAdminComponent },
  { path: 'exercises', component: ExercisesAdminComponent },
  { path: 'meals/new', component: NewMealModComponent },
  { path: 'exercises/new', component: NewExerciseModComponent },
  { path: 'user/weight', component: PatchWeightUserComponent },
  { path: 'today', component: TodayUserComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
