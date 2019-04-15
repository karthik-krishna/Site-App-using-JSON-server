import { TestBed ,async, inject} from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { SiteServiceService } from './site-service.service';
import {ISite} from './ISite'
let siteService: SiteServiceService;

describe('SiteServiceService', () => {



  beforeEach(() => TestBed.configureTestingModule({
  imports:[HttpClientModule],
  providers:[SiteServiceService]
  }));

  it('should be created', () => {
    const service: SiteServiceService = TestBed.get(SiteServiceService);
    expect(service).toBeTruthy();
  });

  it('should do something async', (done) => {
	  setTimeout(() => {
	    expect(true).toBe(true);
	    done();
	  }, 2000);
	});

  it('should be give all site data', (done) => {
    const service: SiteServiceService = TestBed.get(SiteServiceService);
    service.getAllSites(0,2,'asc','').subscribe((data) =>{
    	console.log(data.body);
    	expect(data.body.length>0 && data.body.length<2);
    	done();
    })
  },1000);

  it('should be give particular data', (done) => {
    const service: SiteServiceService = TestBed.get(SiteServiceService);
    service.getSiteDetail('evFHCQwfoC').subscribe((data) =>{
    	console.log(data.id);
    	expect(data.id).toEqual('evFHCQwfoC');
    	done();
    })
  },1000);



});
