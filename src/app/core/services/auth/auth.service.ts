import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  signup(userData: User): Observable<User> {
    return this.http.post<User>(`${this.URL}/auth/signup`, userData);
  }

  login(userData: User): Observable<User> {
    return this.http.post<User>(`${this.URL}/auth/login`, userData);
  }
}
