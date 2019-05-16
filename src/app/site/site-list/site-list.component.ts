import { Component, OnInit } from '@angular/core';
import {SiteServiceService} from '../site-service.service'
import {ISite} from '../ISite';
@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.scss']
})
export class SiteListComponent implements OnInit {

  constructor(private siteService:SiteServiceService) { }
  public siteResponse:ISite[]=[];
  public siteResult:ISite[]=[];
  public start:number=0;
  public end:number=10;
  public siteResponseTotalLength:String;
  sortingOption:String='asc';
  public searchClient:String='';

  ngOnInit() {
    this.getAllSites(this.start,this.end,this.sortingOption,this.searchClient)
  }

  getAllSites(start,end,sortingOption,searchClient) {
    this.siteService.getAllSites(start,end,sortingOption,searchClient).subscribe(resp => {
      this.siteResult=[];
      this.siteResponseTotalLength=resp.headers.get('X-Total-Count');
    	this.siteResponse=JSON.parse(JSON.stringify(resp.body))
    	this.siteResponse.forEach((item,i)=>{
    		this.siteResult.push(item);
    	})
    })
  }

  paginate(event) {
       this.start=event.first;
       this.end=event.first+10;
       this.getAllSites(this.start,this.end,this.sortingOption,this.searchClient);
    }

  sortListing(){
    this.getAllSites(this.start,this.end,this.sortingOption,this.searchClient);
  }

  searchBasedonClient(){
    this.getAllSites(this.start,this.end,this.sortingOption,this.searchClient);
  }



    


}
