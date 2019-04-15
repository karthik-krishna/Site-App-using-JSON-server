import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

 public baseUrl:string = 'http://localhost:3000';

 getMyDetails() {
        return this.http.get(this.baseUrl+ '/me');
    }
}
