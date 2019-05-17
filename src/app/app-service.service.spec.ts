import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AppServiceService } from './app-service.service';

describe('AppServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
  imports: [
        HttpClientModule
      ]
  }));

  it('should be created', () => {
    const service: AppServiceService = TestBed.get(AppServiceService);
    expect(service).toBeTruthy();
  });

  xit('should be give details of my profile', (done) => {
    const service: AppServiceService = TestBed.get(AppServiceService);
    service.getMyDetails().subscribe((data :any) =>{
    	expect(data.email).toEqual('Edwin16@gmail.com');
    	done();
    })
  });

  it('check base url is not empty string', () => {
    const service: AppServiceService = TestBed.get(AppServiceService);
    expect(service.baseUrl).not.toBe(null);
    
  });


});
