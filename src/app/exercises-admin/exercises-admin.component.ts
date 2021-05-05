import { Component, OnInit } from '@angular/core';
import { ExercisesAdminService } from '../_services/exercises-admin.service';
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
     private exercisesAdminService: ExercisesAdminService,
     private route: ActivatedRoute,
     private router: Router) { }

  ngOnInit(): void {

    this.exercisesAdminService.getAll()
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
     this.exercisesAdminService.deleteExercise(id)
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
