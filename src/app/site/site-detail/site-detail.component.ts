import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {SiteServiceService} from '../site-service.service';
import { ISiteDetail } from '../ISite';
@Component({
  selector: 'app-site-detail',
  templateUrl: './site-detail.component.html',
  styleUrls: ['./site-detail.component.scss']
})
export class SiteDetailComponent implements OnInit {
  
  siteId:String;
  siteResponse:ISiteDetail = {} as ISiteDetail;

  images=[];

  constructor(private siteService:SiteServiceService, private route:ActivatedRoute) { 
  this.siteId=this.route.snapshot.queryParamMap.get('siteId');
  }

  ngOnInit() {
  	this.getSiteDetail(this.siteId)
  }

  getSiteDetail(siteId) {
    this.siteService.getSiteDetail(siteId).subscribe((resp) => {
    	this.siteResponse=JSON.parse(JSON.stringify(resp))
    	console.log(this.siteResponse);
    	this.images=this.siteResponse.images;
    	
    })
  }

}
