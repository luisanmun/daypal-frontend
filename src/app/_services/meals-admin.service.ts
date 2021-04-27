import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meal } from 'src/app/models/meal';

const API_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class MealsAdminService {
  //cambio de nomre ya que este servicio es para las meals pero vale para todos los roles

  constructor(private http: HttpClient) { }

  //traer los meals desde spring a angular
  // public getMeals(): Observable<Meal[]> {
  //   return this.http.get<Meal[]>(API_URL + '/meals/all');
  // }

  getAll(): Observable<Meal[]> {
    return this.http.get<Meal[]>(API_URL + '/meals');
  }

  deleteMeal(id: any): Observable<any> {
    return this.http.delete(API_URL + '/meals/delete/${id}');
  }

}
