import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-techno',
  templateUrl: './techno.component.html',
  styleUrls: ['./techno.component.css']
})
export class TechnoComponent implements OnInit {

  techno: any = {}
  technoWeb: FirebaseListObservable<any[]>;
  technoOs: FirebaseListObservable<any[]>;
  technoMobile: FirebaseListObservable<any[]>;
  technoOther: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    
    this.technoWeb = af.database.list('technos/web');
    this.technoOs = af.database.list('technos/os');
    this.technoMobile = af.database.list('technos/mobile');
    this.technoOther = af.database.list('technos/autre');

  }

  ngOnInit() {
  }

}
