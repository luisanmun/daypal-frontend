import { Component, OnInit } from '@angular/core';
import { MealsAdminService } from '../_services/meals-admin.service';
import { Meal } from 'src/app/models/meal';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-meals-admin',
  templateUrl: './meals-admin.component.html',
  styleUrls: ['./meals-admin.component.css']
})
export class MealsAdminComponent implements OnInit {

  meals?: Meal[];

  //constructor(private mealsAdminService: MealsAdminService) {}

   constructor(
     private mealsAdminService: MealsAdminService,
     private route: ActivatedRoute,
     private router: Router) { }

  ngOnInit(): void {


    this.mealsAdminService.getAll()
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
     this.mealsAdminService.deleteMeal(id)
       .subscribe(
         response => {
           console.log(response);
           this.router.navigate(['/meals']);
         },
         error => {
           console.log(error);
         });
       }


}
