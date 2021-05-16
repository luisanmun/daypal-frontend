import { Component, OnInit } from '@angular/core';
import { ExercisesService } from '../_services/exercises.service';


@Component({
  selector: 'app-new-exercise-mod',
  templateUrl: './new-exercise-mod.component.html',
  styleUrls: ['./new-exercise-mod.component.css']
})
export class NewExerciseModComponent implements OnInit {

  form: any = {
    title: null,
    description: null,
    loseWeight: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private exercisesService: ExercisesService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const {title, description, loseWeight} = this.form;

    this.exercisesService.register(title, description, loseWeight).subscribe(
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
}
