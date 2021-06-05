import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meal } from '../models/meal';
import { Exercise } from '../models/exercise';

const API_URL = 'http://localhost:8080';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  patchWeight(weight: number, userId: number): Observable<any> {
    return this.http.patch(API_URL + '/user/' + userId + '/weight', weight, httpOptions);
  }

  getWeight(userId: number): Observable<any> {
    return this.http.get(API_URL + '/user/' + userId + '/weight', { responseType: 'text' });
  }

  getHeight(userId: number): Observable<any> {
    return this.http.get(API_URL + '/user/' + userId + '/height', { responseType: 'text' });
  }

  getMealNow(userId: number): Observable<Meal> {
    return this.http.get<Meal>(API_URL + '/user/' + userId + '/meals', { responseType: 'json' });
  }

  getExerciseNow(userId: number): Observable<Exercise> {
    return this.http.get<Exercise>(API_URL + '/user/' + userId + '/exercises', { responseType: 'json' });
  }

  getScore(userId: number): Observable<any> {
    return this.http.get(API_URL + '/user/' + userId + '/score', { responseType: 'text' });
  }

  mealsCounterUp(userId: number): Observable<any> {
    return this.http.patch(API_URL + '/user/' + userId + '/mealsCounter', httpOptions);
  }

  exercisesCounterUp(userId: number): Observable<any> {
    return this.http.patch(API_URL + '/user/' + userId + '/exercisesCounter', httpOptions);
  }

  refreshMeal(userId: number): Observable<any> {
    return this.http.patch(API_URL + '/user/' + userId + '/meals', httpOptions);
  }

  refreshExercise(userId: number): Observable<any> {
    return this.http.patch(API_URL + '/user/' + userId + '/exercises', httpOptions);
  }

  getLastUpdatedBreakfastDate(userId: number): Observable<String> {
    return this.http.get(API_URL + '/user/' + userId + '/lastUpdatedBreakfastDate', { responseType: 'text' });
  }

  getLastUpdatedLunchDate(userId: number): Observable<String> {
    return this.http.get(API_URL + '/user/' + userId + '/lastUpdatedLunchDate', { responseType: 'text' });
  }

  getLastUpdatedSnackDate(userId: number): Observable<String> {
    return this.http.get(API_URL + '/user/' + userId + '/lastUpdatedSnackDate', { responseType: 'text' });
  }

  getLastUpdatedDinnerhDate(userId: number): Observable<String> {
    return this.http.get(API_URL + '/user/' + userId + '/lastUpdatedDinnerDate', { responseType: 'text' });
  }

  getLastUpdatedExerciseDate(userId: number): Observable<String> {
    return this.http.get(API_URL + '/user/' + userId + '/lastUpdatedExerciseDate', { responseType: 'text' });
  }

}
