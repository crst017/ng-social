import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { User } from 'src/app/core/models/user.model';

interface TokenData {
  access_token: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly URL = 'http://localhost:3000';
  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  get token(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('auth_token');
    }
    return null;
  }

  signup(userData: User): Observable<User> {
    return this.http.post<User>(`${this.URL}/auth/signup`, userData);
  }

  login(userData: User): Observable<TokenData> {
    return this.http.post<TokenData>(`${this.URL}/auth/login`, userData).pipe(
      tap((tokenData) => {
        this.saveToken(tokenData['access_token']);
      })
    );
  }

  logout(): void {
    this.removeToken();
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return !!this.token;
    }
    return false;
  }

  private saveToken(token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('auth_token', token);
    }
  }

  private removeToken(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('auth_token');
    }
  }
}
