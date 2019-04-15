import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteListComponent } from './site-list/site-list.component';
import { SiteDetailComponent } from './site-detail/site-detail.component';


const routes: Routes = [{
    path: '',
    component: SiteListComponent
  },{
    path: 'site-detail',
    component: SiteDetailComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
