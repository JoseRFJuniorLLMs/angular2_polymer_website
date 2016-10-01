import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-pro',
  templateUrl: './experience-pro.component.html',
  styleUrls: ['./experience-pro.component.css'],
  inputs : ['entreprise', 'color', 'begin', 'end','jobName','description','technos','challenge','city']
})
export class ExperienceProComponent implements OnInit {

content:any = "";
jobName:any;

  constructor() {
   }

  ngOnInit() {
  }

}
