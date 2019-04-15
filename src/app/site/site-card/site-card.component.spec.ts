import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SiteCardComponent } from './site-card.component';

describe('SiteCardComponent', () => {
  let component: SiteCardComponent;
  let fixture: ComponentFixture<SiteCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteCardComponent ],
      imports:[RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteCardComponent);
    component = fixture.componentInstance;
    component.data = {
  "id": "evFHCQwfoC",
  "clientId": "Mx6-aq5D_0uk",
  "title": "Industrial Garage",
  "createdAt": "Wed Oct 31 2018 08:06:36 GMT+0000 (UTC)",
  "updatedAt": "Thu Nov 01 2018 23:17:39 GMT+0000 (UTC)",
  "contacts": {
    "main": {
      "id": "tRZzs-hCX5",
      "firstName": "Elmer",
      "lastName": "Kshlerin",
      "email": "Ron_Abernathy@hotmail.com",
      "phoneNumber": "053-149-4934",
      "jobTitle": "Lead Response Supervisor",
      "address": {
        "zipCode": "28932",
        "city": "New Malvina",
        "street": "47782 Hodkiewicz Gateway",
        "country": "Guam",
        "state": "New Jersey"
      }
    }
  },
  "address": {
    "zipCode": "40575-6469",
    "city": "Port Concepcion",
    "street": "2930 Elizabeth Plaza",
    "country": "Belgium",
    "state": "Delaware"
  },
  "images": [
    "http://lorempixel.com/640/480/city",
    "http://lorempixel.com/640/480/city",
    "http://lorempixel.com/640/480/city",
    "http://lorempixel.com/640/480/city"
  ],
  "tags": [
    "old",
    "state"
  ]
};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
