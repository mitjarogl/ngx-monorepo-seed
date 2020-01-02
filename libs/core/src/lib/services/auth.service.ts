import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { Environment } from '../environment';
import { catchError, tap } from 'rxjs/operators';
import { AuthUser } from '../models/auth-user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient,
              private environment: Environment,
              private router: Router) {
  }

  /**
   * Login user
   *
   * @param {string} email
   * @param {string} password
   * @return {Observable<Token>}
   */
  login(email: string, password: string): Observable<AuthUser> {
    return this.http.post<AuthUser>(this.environment.apiUrl + '/auth', { email, password })
      .pipe(catchError((err: any) => {
        return throwError('Ooopsy Daisy, your credentials are not valid');
      }));
  }


  /**
   * Logout user
   */
  logout(): Observable<void> {
    this.router.navigate(['auth/login']);
    return of();
  }

  refreshToken(refreshToken: string): Observable<AuthUser> {
    return this.http.post<AuthUser>(`${this.environment.apiUrl}/auth/tokens`, {
      refreshToken: refreshToken,
    })
      .pipe(
        tap((authUser: AuthUser) => {
          return of(authUser);
        }),
        catchError((error: any) => {
          console.log('Token was not refreshed', error);
          return throwError(error);
        }),
      );
  }
}
