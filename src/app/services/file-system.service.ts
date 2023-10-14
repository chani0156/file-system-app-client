import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class FileSystemService {
  
 private baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getFileSystemData(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  searchFileSystem(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}search?q=${query}`)
      .pipe(
        catchError(this.handleError)
      );
  }
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong. Please try again later.'));
  }
}
