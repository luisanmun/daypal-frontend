import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { Meal } from '../models/meal';
import { Exercise } from '../models/exercise';

const lastConfirmedBreakfast = 0;
const lastConfirmedLunch = 0;
const lastConfirmedSnack = 0;
const lastConfirmedDinner = 0;
const lastConfirmedExercise = 0;


@Component({
  selector: 'app-today-user',
  templateUrl: './today-user.component.html',
  styleUrls: ['./today-user.component.css']
})
export class TodayUserComponent implements OnInit {

  currentUser: any;

  currentDate = new Date;
  hora = this.currentDate.getHours();
  min = this.currentDate.getMinutes();
  dia = this.currentDate.getDay();

  currentMeal !: Meal;

  currentExercise !: Exercise;

  currentScore: any;

  canConfirmMeal: any;

  canConfirmExercise: any;



  //currentDateSum = this.currentDate.getDay() + this.currentDate.getMonth() + this.currentDate.getFullYear(); //devuelve number en minuscula
  //this.currentDate.getDay() + this.currentDate.getMonth() + this.currentDate.getFullYear();

  //luld !: String;
  //lastUpdatedLunchDate !: number;

  constructor(private token: TokenStorageService, private userService: UserService) { }

  ngOnInit(): void {

    this.currentUser = this.token.getUser();
    this.userService.getMealNow(this.currentUser.id).subscribe((data) => this.currentMeal = data);
    this.userService.getExerciseNow(this.currentUser.id).subscribe((data) => this.currentExercise = data);
    this.userService.getScore(this.currentUser.id).subscribe((data) => this.currentScore = data);
    this.userService.getCanConfirmMeal(this.currentUser.id).subscribe((data) => this.canConfirmMeal = data);
    this.userService.getCanConfirmExercise(this.currentUser.id).subscribe((data) => this.canConfirmExercise = data);



    // this.userService.getLastUpdatedLunchDate(this.currentUser.id).subscribe((data) => this.luld = data);
    // this.lastUpdatedLunchDate = +this.luld; //obtengo el valor en tipo number
    
  }

  nowBreakfast(): boolean {
    var res = false;
    if (this.hora >= 10 && this.hora < 11) {
      res = true;
    }
    return res;
  }

  nowLunch(): boolean {
    var res = false;
    if (this.hora >= 14 && this.hora < 15) {
      res = true;
    }
    return res;
  }

  nowSnack(): boolean {
    var res = false;
    if (this.hora >= 18 && this.hora < 19) {
      res = true;
    }
    return res;
  }

  nowExercise(): boolean {
    var res = false;
    if (this.hora >= 19 && this.hora < 20) {
      res = true;
    }
    return res;
  }

  nowFreeTime(): boolean {
    var res = false;
    if (this.hora >= 20 && this.hora < 22) {
      res = true;
    }
    return res;
  }

  nowDinner(): boolean {
    var res = false;
    if (this.hora >= 22 && this.hora < 23) {
      res = true;
    }
    return res;
  }

  nowBedTimeRoutine(): boolean {
    var res = false;
    if (this.hora == 23 || this.hora == 0) {
      res = true;
    }
    return res;
  }

  nowSleep(): boolean {
    var res = false;
    if (this.hora >= 1 && this.hora < 9) {
      res = true;
    }
    return res;
  }

  nowWork(): boolean {
    var res = false;
    if ((this.hora >= 9 && this.hora < 10) || (this.hora >= 11 && this.hora < 14) || (this.hora >= 15 && this.hora < 18)) {
      res = true;
    }
    return res;
  }

  nowFreeTimeWeekend(): boolean {
    var res = false;
    if ((this.hora >= 11 && this.hora < 14) || (this.hora >= 15 && this.hora < 18) || (this.hora >= 19 && this.hora < 22) || this.hora == 23 || this.hora == 0 || this.hora == 1) {
      res = true;
    }
    return res;
  }

  nowSleepWeekend(): boolean {
    var res = false;
    if (this.hora >= 2 && this.hora < 10) {
      res = true;
    }
    return res;
  }

  isWeekend(): boolean {
    var res = false;
    if (this.dia == 6 || this.dia == 0) {
      res = true;
    }
    return res;
  }

  refreshMeal(): void {
    this.userService.refreshMeal(this.currentUser.id)
      .subscribe(
        response => {
          console.log(response);
          window.location.reload();
        },
        error => {
          console.log(error);
        });
  }

  refreshExercise(): void {
    this.userService.refreshExercise(this.currentUser.id)
      .subscribe(
        response => {
          console.log(response);
          window.location.reload();
        },
        error => {
          console.log(error);
        });
  }

  mealsCounterUp(): void {
    this.userService.mealsCounterUp(this.currentUser.id)
      .subscribe(
        response => {
          console.log(response);
          window.location.reload();
        },
        error => {
          console.log(error);
        });
  }

  exercisesCounterUp(): void {
    this.userService.exercisesCounterUp(this.currentUser.id)
      .subscribe(
        response => {
          console.log(response);
          window.location.reload();
        },
        error => {
          console.log(error);
        });    
  }

  showMealButton(): boolean {
    let res = false;

     if(this.canConfirmMeal == "true"){
       res = true;
     }

     return res;
  }

  showExerciseButton(): boolean {
    let res = false;

     if(this.canConfirmExercise == "true"){
       res = true;
     }

     return res;
  }




  

  // showBreakfastButton(): boolean {
  //   let res = false;

  //   // let currentDateSum = this.currentDate.getDay() + this.currentDate.getMonth() + this.currentDate.getFullYear();
  //   // let lcb;
  //   // this.userService.getLastUpdatedBreakfastDate(this.currentUser.id).subscribe((data) => lcb = data);
  //   // lcb = Number(lcb);

  //   // if(currentDateSum > lcb){
  //   //   res = true;
  //   // }

  //   return res;
  // }

  // showLunchButton(): boolean {
  //   let res = false;

  //   //this.userService.getLastUpdatedLunchDate(this.currentUser.id); 
  //   //por si solo no hace bucle, porque sin el suscribe no hace la llmada??

  //   if(this.currentDateSum > this.lastUpdatedLunchDate){
  //       res = true;
  //     }

  //   return res;
  // }

  // showSnackButton(): boolean {
  //   let res = false;

  //   // let currentDateSum = this.currentDate.getDay() + this.currentDate.getMonth() + this.currentDate.getFullYear();
  //   // let lcl = Number(this.userService.getLastUpdatedSnackDate(this.currentUser.id));

  //   // if(currentDateSum > lcl){
  //   //   res = true;
  //   // }

  //   return res;
  // }

  // showDinnerButton(): boolean {
  //   let res = false;

  //   // let currentDateSum = this.currentDate.getDay() + this.currentDate.getMonth() + this.currentDate.getFullYear();
  //   // let lcl = Number(this.userService.getLastUpdatedDinnerhDate(this.currentUser.id));

  //   // if(currentDateSum > lcl){
  //   //   res = true;
  //   // }

  //   return res;
  // }

  // showExerciseButton(): boolean {
  //   let res = false;

  //   // let currentDateSum = this.currentDate.getDay() + this.currentDate.getMonth() + this.currentDate.getFullYear();
  //   // let lcl = Number(this.userService.getLastUpdatedExerciseDate(this.currentUser.id));

  //   // if(currentDateSum > lcl){
  //   //   res = true;
  //   // }

  //   return res;
  // }

}
