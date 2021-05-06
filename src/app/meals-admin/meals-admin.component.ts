import { Component, OnInit } from '@angular/core';
import { MealsService } from '../_services/meals.service';
import { Meal } from 'src/app/models/meal';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-meals-admin',
  templateUrl: './meals-admin.component.html',
  styleUrls: ['./meals-admin.component.css']
})
export class MealsAdminComponent implements OnInit {

  meals?: Meal[];

   constructor(
     private mealsService: MealsService,
     private route: ActivatedRoute,
     private router: Router) { }

  ngOnInit(): void {


    this.mealsService.getAll()
      .subscribe(
        data => {
          this.meals = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });

    

  }

   deleteMeal(id : any): void {
     this.mealsService.deleteMeal(id)
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
