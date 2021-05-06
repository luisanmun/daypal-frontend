import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meal } from 'src/app/models/meal';

const API_URL = 'http://localhost:8080';

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

}
