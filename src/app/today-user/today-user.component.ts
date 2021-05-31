import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { Meal } from '../models/meal';
import { Exercise } from '../models/exercise';

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
  dia =this.currentDate.getDay();

  currentMeal !: Meal;

  currentExercise !: Exercise;

  currentScore : any;

  constructor(private token: TokenStorageService, private userService: UserService) { }

  ngOnInit(): void {
  
    this.currentUser = this.token.getUser();
    this.userService.getMealNow(this.currentUser.id).subscribe((data)=>this.currentMeal = data);
    this.userService.getExerciseNow(this.currentUser.id).subscribe((data)=>this.currentExercise = data);
    this.userService.getScore(this.currentUser.id).subscribe((data)=>this.currentScore = data);    
  }

  nowBreakfast(): boolean {
    var res = false;
    if(this.hora >= 10 && this.hora < 11){
      res = true;
    }
    return res;
  }

  nowLunch(): boolean {
    var res = false;
    if(this.hora >= 14 && this.hora < 15){
      res = true;
    }
    return res;
  }

  nowSnack(): boolean {
    var res = false;
    if(this.hora >= 18 && this.hora < 19){
      res = true;
    }
    return res;
  }

  nowExercise(): boolean {
    var res = false;
    if(this.hora >= 19 && this.hora < 20){
      res = true;
    }
    return res;
  }

  nowFreeTime(): boolean {
    var res = false;
    if(this.hora >= 20 && this.hora < 22){
      res = true;
    }
    return res;
  }

  nowDinner(): boolean {
    var res = false;
    if(this.hora >= 22 && this.hora < 23){
      res = true;
    }
    return res;
  }

  nowBedTimeRoutine(): boolean {
    var res = false;
    if((this.hora == 0 && this.min == 0) && (this.hora < 1)){
      res = true;
    }
    return res;
  }

  nowSleep(): boolean {
    var res = false;
    if(this.hora >= 1 && this.hora < 9){
      res = true;
    }
    return res;
  }

  nowWork(): boolean {
    var res = false;
    if((this.hora >= 9 && this.hora < 10) || (this.hora >= 11 && this.hora < 14) || (this.hora >= 15 && this.hora < 18)){
      res = true;
    }
    return res;
  }

  nowFreeTimeWeekend(): boolean {
    var res = false;
    if((this.hora >= 11 && this.hora < 14) || (this.hora >= 15 && this.hora < 18) || (this.hora >= 19 && this.hora < 22) || (this.hora >= 23 && this.hora < 2)){
      res = true;
    }
    return res;
  }

  nowSleepWeekend(): boolean {
    var res = false;
    if(this.hora >= 2 && this.hora < 10){
      res = true;
    }
    return res;
  }

  isWeekend(): boolean {
    var res = false;
    if(this.dia == 6 || this.dia == 0){
      res = true;
    }
    return res;
  }
}
