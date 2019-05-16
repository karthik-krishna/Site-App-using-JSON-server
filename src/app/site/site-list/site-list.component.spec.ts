import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SiteListComponent } from './site-list.component';
import { SiteCardComponent } from '../site-card/site-card.component';
import {PaginatorModule} from 'primeng/paginator';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('SiteListComponent', () => {
  let component: SiteListComponent;
  let fixture: ComponentFixture<SiteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteListComponent , SiteCardComponent],
      imports:[FormsModule,PaginatorModule,RouterTestingModule,HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h2 tag', () => {
    const fixture = TestBed.createComponent(SiteListComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('All Sites');
  });

  it('should paginate', () => {
    const fixture = TestBed.createComponent(SiteListComponent);
    fixture.detectChanges();
    let event={ first:1 }
    component.paginate(event);
    expect(component.start).toEqual(1);
  });

  it('should get all site details', () => {
    const fixture = TestBed.createComponent(SiteListComponent);
    fixture.detectChanges();
    component.getAllSites(0,10,'asc','');
    expect(component.siteResponseTotalLength).not.toBe('');
  });

  it('should get all site based on search', () => {
    const fixture = TestBed.createComponent(SiteListComponent);
    fixture.detectChanges();
    component.searchBasedonClient();
    expect(component.sortingOption).not.toBe('');
  });

});
