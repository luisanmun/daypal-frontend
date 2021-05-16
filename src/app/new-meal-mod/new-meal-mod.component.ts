import { Component, OnInit } from '@angular/core';
import { MealsService } from '../_services/meals.service';

@Component({
  selector: 'app-new-meal-mod',
  templateUrl: './new-meal-mod.component.html',
  styleUrls: ['./new-meal-mod.component.css']
})
export class NewMealModComponent implements OnInit {

  form: any = {
    title: null,
    description: null,
    calories: null,
    category: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private mealsService: MealsService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const {title, description, calories, category} = this.form;

    this.mealsService.register(title, description, calories, category).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
  //boton para volver despues de crear
  volver(): void {
    window.location.reload();
  }

  checkMinCorrecto(n: number): any {
    return n>=1
  }

  checkMaxCorrecto(n: number): any {
    return n<=5000
  }
}
