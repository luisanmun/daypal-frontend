import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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
}
