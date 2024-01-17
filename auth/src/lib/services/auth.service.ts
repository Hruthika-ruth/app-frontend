import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:3000';

  constructor(private http: HttpClient) {}

  signUp(user: {
    username: string;
    email: string;
    password: string;
  }): Observable<User> {
    const url = `${this.apiUrl}/users`;
    const body = { user: user };
    return this.http
      .post<User>(url, body, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      })
      .pipe(
        tap((response: User) => this.setUserId(response)),
        catchError(this.handleError)
      );
  }

  login(credentials: { username: string; password: string }): Observable<User> {
    const url = `${this.apiUrl}/users`;
    return this.http
      .post<User>(url, credentials, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      })
      .pipe(
        tap((response: User) => this.setUserId(response)),
        catchError(this.handleError)
      );
  }

  getCurrentUserId(): number | null {
    const userId = localStorage.getItem('userId');
    return userId ? parseInt(userId, 10) : null;
  }

  private setUserId(response: User): void {
    if (response && response.id) {
      localStorage.setItem('userId', response.id.toString());
    }
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error has occurred.';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      if (error.status === 422 && typeof error.error === 'object') {
        errorMessage = 'Validation error: ' + JSON.stringify(error.error);
      } else {
        errorMessage = `Backend returned code ${
          error.status
        }, body was: ${JSON.stringify(error.error)}`;
      }
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
