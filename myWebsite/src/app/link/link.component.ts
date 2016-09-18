import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  title = "Liens";
  
  constructor() { }

  goToWebsite(url){
    window.location.href = url;
  }
  ngOnInit() {
  }

}
