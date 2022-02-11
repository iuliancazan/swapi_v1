import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';

import { People } from '../interfaces/People';
import { Person } from '../interfaces/Person';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private apiUrl = 'https://swapi.dev/api/people';

  constructor(private http: HttpClient) {}

  getPeople(url: string = this.apiUrl): Observable<People> {
    return this.http.get<People>(url);
  }

  getPerson(id: number): Observable<Person> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Person>(url);
  }
}
