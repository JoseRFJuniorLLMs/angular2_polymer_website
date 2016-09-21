import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-techno',
  templateUrl: './techno.component.html',
  styleUrls: ['./techno.component.css']
})
export class TechnoComponent implements OnInit {

  techno: any = {}

  constructor() {
    this.techno.web = [
      'assets/svg/angular2.svg',
      'assets/svg/html5.svg',
      'assets/svg/css3.svg',
      'assets/svg/js.png',
      'assets/svg/php.svg',
      'assets/svg/polymer.svg',
      'assets/svg/grunt.svg',
      'assets/svg/yeoman.svg',
      'assets/svg/npm.svg'
    ];

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
