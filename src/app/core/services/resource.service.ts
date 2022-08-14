import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export abstract class ResourceService<T> {

  protected readonly apiUrl = environment.apiUrl + this.retrieveResource();
  constructor(protected http: HttpClient) { }

  abstract retrieveResource(): string;

  list(): Observable<T[]>{
    return this.http.get<T[]>(this.apiUrl);
  }
}
