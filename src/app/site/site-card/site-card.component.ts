import { Component, OnInit, Input } from '@angular/core';
import {ISite} from '../ISite';
@Component({
  selector: 'app-site-card',
  templateUrl: './site-card.component.html',
  styleUrls: ['./site-card.component.scss']
})
export class SiteCardComponent implements OnInit {

  constructor() { }
  @Input() data:ISite;

  ngOnInit(){

  }

}
