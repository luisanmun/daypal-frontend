import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatRadioModule } from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { MealsAdminComponent } from './meals-admin/meals-admin.component';
import { ExercisesAdminComponent } from './exercises-admin/exercises-admin.component';
import { NewExerciseModComponent } from './new-exercise-mod/new-exercise-mod.component';
import { NewMealModComponent } from './new-meal-mod/new-meal-mod.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatchWeightUserComponent } from './patch-weight-user/patch-weight-user.component';
import { TodayUserComponent } from './today-user/today-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    MealsAdminComponent,
    ExercisesAdminComponent,
    NewExerciseModComponent,
    NewMealModComponent,
    PatchWeightUserComponent,
    TodayUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatRadioModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
