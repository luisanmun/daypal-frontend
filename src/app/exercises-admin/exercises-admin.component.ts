import { Component, OnInit } from '@angular/core';
import { ExercisesService } from '../_services/exercises.service';
import { Exercise } from 'src/app/models/exercise';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-exercises-admin',
  templateUrl: './exercises-admin.component.html',
  styleUrls: ['./exercises-admin.component.css']
})
export class ExercisesAdminComponent implements OnInit {

  exercises?: Exercise[];

   constructor(
     private exercisesService: ExercisesService,
     private route: ActivatedRoute,
     private router: Router) { }

  ngOnInit(): void {

    this.exercisesService.getAll()
      .subscribe(
        data => {
          this.exercises = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });

  }

  deleteExercise(id : any): void {
     this.exercisesService.deleteExercise(id)
       .subscribe(
         response => {
           console.log(response);
           window.location.reload();
         },
         error => {
           console.log(error);
         });
       }
}
