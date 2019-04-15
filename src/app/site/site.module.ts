import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SiteRoutingModule } from './site-routing.module';
import { SiteListComponent } from './site-list/site-list.component';
import { SiteDetailComponent } from './site-detail/site-detail.component';
import { SiteCardComponent } from './site-card/site-card.component';
import {PaginatorModule} from 'primeng/paginator';
import {CarouselModule} from 'primeng/carousel';

@NgModule({
  declarations: [SiteListComponent, SiteDetailComponent, SiteCardComponent],
  imports: [
    CommonModule,
    SiteRoutingModule,
    HttpClientModule,
    PaginatorModule ,
    CarouselModule,
  ]
})
export class SiteModule { }
