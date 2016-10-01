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

  constructor(af: AngularFire) {
    this.technoWeb = af.database.list('technos/web');
    this.technoOs = af.database.list('technos/os');

    this.techno.os = [
      'assets/svg/linux.svg',
      'assets/svg/windows.svg',
      'assets/svg/apple.svg'
    ];

    this.techno.mobile = [
      'assets/svg/android.svg',
      'assets/svg/ionic.svg',
      'assets/svg/cordova.png'
    ];

    this.techno.other = [
      'assets/svg/c.svg','assets/svg/cpp.svg','assets/svg/java.svg','assets/svg/logstash.png','assets/svg/kibana.svg','assets/svg/elasticsearch.png'
    ];
  }

  ngOnInit() {
  }

}
