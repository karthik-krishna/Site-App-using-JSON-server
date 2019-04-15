import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppServiceService } from '../app-service.service';
import {ISite} from './ISite';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SiteServiceService {
	
	constructor(private http: HttpClient, private baseURLservice:AppServiceService) { }

  getAllSites(start,end,order,clientName) {
        return this.http.get(this.baseURLservice.baseUrl+ '/sites?_start='+start+'&_end='+end+'&_sort=createdAt&_order='+order+'&client.givenName='+clientName, {observe: 'response'}).pipe(
        map((res) => res));
    }

   getSiteDetail(siteId) {
        return this.http.get(this.baseURLservice.baseUrl+ '/sites/'+siteId+'?_expand=client');
    }
}
