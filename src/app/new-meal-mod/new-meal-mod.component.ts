import { Component, OnInit } from '@angular/core';
import { MealsService } from '../_services/meals.service';
import { Validators, FormControl} from '@angular/forms';

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
    // calories:  [null, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(1), Validators.max(5000)]],
    category: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  // categories:string[]=["BREAKFAST", "LUNCH", "SNACK", "DINNER"];

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
    return n>1
  }

  checkMaxCorrecto(n: number): any {
    return n<5000
  }
}
