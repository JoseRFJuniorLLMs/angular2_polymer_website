import { Component, OnInit } from '@angular/core';

class Job {
  public entreprise: string;
  public begin: string;
  public end: string;
  public jobName: string;
  public description: string;
  public challenge: any[];
  public technos: any[];
  public color: string;
  public city: string;

  constructor(entreprise, begin, end, jobName, description, challenge, technos, color, city) {
    this.entreprise = entreprise;
    this.begin = begin;
    this.end = end;
    this.jobName = jobName;
    this.description = description;
    this.color = color;
    this.city = city;
    this.challenge = challenge;
    this.technos = technos;
  }
}

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  expPro: any[] = [];
  formations: any[] = [];

  constructor() {

    this.expPro.push(new Job(
      "MICHELIN",
      "De mars 2016",
      "à maintenant",
      "Analyste développeur fullstack",
      "Analyse de besoins, conception et développment de solutions web et/ou mobile innovantes et attrayantes.",
      ['Time to market très court', 'Multiplication des technologies utilisées', "S'adapter aux différents métiers"], ['assets/svg/android.svg', 'assets/svg/angular.svg', 'assets/svg/grails.svg', 'assets/svg/ionic.svg'
      , 'assets/svg/cordova.png', 'assets/svg/grunt.svg', 'assets/svg/yeoman.svg', 'assets/svg/npm.svg'], "#5C6BC0",
      "Clermont-Ferrand"));

    this.expPro.push(new Job("Université Blaise Pascal", "De fev. 2016", "à mai 2016", "Professeur vacataire", "test", [], [], "#5C6BC0", "Clermont-Ferrand"));

    this.expPro.push(new Job("MICHELIN", "De sept. 2014", "à mars 2016", "Analyste fonctionnel", "test", [], [], "#5C6BC0", "Clermont-Ferrand"));

    this.expPro.push(new Job("MICHELIN", "De sept. 2013", "à sept. 2014", "Alternant", "test", [], [], "#5C6BC0", "Clermont-Ferrand"));

    this.expPro.push(new Job("WORLDLINE", "De avr. 2013", "à sept. 2013", "Développeur stagiaire", "test", [], [], "#5C6BC0", "Lyon"));

    this.expPro.push(new Job("CHU", "De avr. 2010", "à juin 2010", "Développeur stagiaire", "test", [], [], "#5C6BC0", "Clermont-Ferrand"));

    this.formations.push(new Job("ISIMA", "De sept. 2011", "à sept. 2014", "Ecole d'ingénieur", "test", [], [], "#43A047", "Clermont-Ferrand"));

    this.formations.push(new Job("ISIMA", "De sept. 2011", "à sept. 2014", "Ecole d'ingénieur", "test", [], [], "#43A047", "Clermont-Ferrand"));

    this.formations.push(new Job("ISIMA", "De sept. 2011", "à sept. 2014", "Ecole d'ingénieur", "test", [], [], "#43A047", "Clermont-Ferrand"));
  }

  ngOnInit() {
  }

}
