import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Rate} from "../models/rate";
import {ResourceService } from "./resource.service";
import {ApiPaths} from "../enums/api-paths";

@Injectable({
  providedIn: 'root'
})
export class RateService  extends ResourceService<Rate>{

  constructor(protected override http: HttpClient) {
    super(http);
  }

  /*list(): Observable<any[]>{
    return this.http.get<any>(environment.apiUrl);
  }*/
  retrieveResource(): string {
    return ApiPaths.Usd;
  }
}
