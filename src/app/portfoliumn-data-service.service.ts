import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ProjectCard } from './projectCard';
import {Observable, throwError} from 'rxjs';
import {catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PortfoliumnDataService {
  private portfoliumUrl = 'https://portfolium.com/proxy/entries/expert?';
  constructor(private http: HttpClient) { }
  getProjectData(limit, offset): Observable<ProjectCard[]> {
     const urlParams = 'limit=' + limit + '&offset=' + offset + '&sort=recent';
     return this.http.get<ProjectCard[]>(this.portfoliumUrl + urlParams).pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
     );
  }
  private handleError(err: HttpErrorResponse) {

    return throwError('error found'); // update to be more robust
  }

}
