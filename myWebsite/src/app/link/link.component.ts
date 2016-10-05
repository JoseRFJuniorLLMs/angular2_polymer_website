import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  title = "Liens";
  links: FirebaseListObservable<any[]>;
  
  constructor(af: AngularFire) {

    this.links = af.database.list('links'); }

  goToWebsite(url){
    window.location.href = url;
  }
  ngOnInit() {
  }

}
