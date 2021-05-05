import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exercise } from 'src/app/models/exercise';

const API_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class ExercisesAdminService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(API_URL + '/exercises');
  }

  deleteExercise(id: number): Observable<any> {
    return this.http.delete(API_URL + '/exercises/' + id);
  }

}
