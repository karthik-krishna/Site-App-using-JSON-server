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
});
