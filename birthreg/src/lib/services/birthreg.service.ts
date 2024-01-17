import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BirthRegService {
  private apiUrl = 'http://localhost:3000/users';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  createBirthReg(userId: number, birthRegData: any): Observable<any> {
    const url = `${this.apiUrl}/${userId}/birth_regs`;
    const transformedData = this.transformKeysToSnakeCase(birthRegData);

    return this.http
      .post(url, { birth_reg: transformedData }, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  private transformKeysToSnakeCase(data: any): any {
    const result: any = {};
    Object.keys(data).forEach((key) => {
      const transformedKey = key.replace(/([A-Z])/g, '_$1').toLowerCase();
      result[transformedKey] = data[key];
    });
    return result;
  }

  private handleError(error: any) {
    console.error('An error occurred:', error.error);
    return throwError(() => new Error(error.error.message || 'Server error'));
  }
}
