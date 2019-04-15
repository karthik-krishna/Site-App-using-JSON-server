import { Component, OnInit } from '@angular/core';
import {IUser} from '../IUser';
import { AppServiceService} from '../app-service.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private service:AppServiceService) { }

  ngOnInit() {
  	this.getMyDetails()
  }
  myDetails:IUser ={} as IUser;

  getMyDetails() {
    this.service.getMyDetails().subscribe((resp) => {
     
    	this.myDetails=JSON.parse(JSON.stringify(resp));
    	
    })
  }

}
