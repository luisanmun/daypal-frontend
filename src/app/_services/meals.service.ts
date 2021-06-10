import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meal } from 'src/app/models/meal';
import { environment } from './../../environments/environment';

const API_URL = environment.BASE_URL;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Meal[]> {
    return this.http.get<Meal[]>(API_URL + '/meals');
  }

  deleteMeal(id: number): Observable<any> {
    return this.http.delete(API_URL + '/meals/' + id);
  }

  register(title: string, description: string, calories: number, category: string): Observable<any> {
    return this.http.post(API_URL + '/meals', {title,description,calories,category}, httpOptions);
  }
}
