import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
    path: '',
    redirectTo: 'site',
    pathMatch: 'full'
  },
  {
    path: 'site',
    loadChildren: './site/site.module#SiteModule'
  },
  { path:'**', redirectTo: 'site', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
