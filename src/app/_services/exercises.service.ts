import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exercise } from 'src/app/models/exercise';

const API_URL = 'http://localhost:8080';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(API_URL + '/exercises');
  }

  deleteExercise(id: number): Observable<any> {
    return this.http.delete(API_URL + '/exercises/' + id);
  }

  register(title: string, description: string, loseWeight: boolean): Observable<any> {
    return this.http.post(API_URL + '/exercises', {title,description,loseWeight}, httpOptions);
  }
}
