import { Component, OnInit } from '@angular/core';
import {ChartsModule} from 'ng2-charts/ng2-charts';

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

  public radarChartLabels:string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartData:any = [
    {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
  ];
  public radarChartType:string = 'radar';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

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

    this.expPro.push(new Job("Université Blaise Pascal", "De fev. 2016", "à mai 2016", "Chargé d'enseignement vacataire", "Encadrement de Travaux pratiques en C / Système (niveau Bac +3) et en Structure de données (niveau Bac +2)", 
    ["Premiére expérience dans l'enseignement","Intéresser et motiver sur un créneau horaire difficile","Vulgariser au maximum"], ['assets/svg/c.svg','assets/svg/java.svg'], "#5C6BC0", "Clermont-Ferrand"));

    this.expPro.push(new Job("MICHELIN", "De sept. 2014", "à mars 2016", "Analyste fonctionnel", "Conception et amélioration d'outils gravitant autour de la prise de commande", [], [], "#5C6BC0", "Clermont-Ferrand"));

    this.expPro.push(new Job("MICHELIN", "De sept. 2013", "à sept. 2014", "Alternant", "Etude et mise en place d’outils de monitoring et de troubleshooting", [], ['assets/svg/logstash.png','assets/svg/kibana.svg','assets/svg/elasticsearch.png'], "#5C6BC0", "Clermont-Ferrand"));


/* 
Compétences: spring, jersey, maven, hibernate, mockito, talend, JEE, shell, jenkins, etc. */

    this.expPro.push(new Job("WORLDLINE", "De avr. 2013", "à sept. 2013", "Développeur stagiaire", "Conception, développement, maintenance et déploiement d'applications Web JEE. Stage effectué dans le cadre du programme pédagogique de deuxième année de l'ISIMA.", ['Intégration aux équipes de Worldline',"Conception et développement d'évolutions",'Maintenance des services en place',"Prise en main des outils et des méthodes d'intégration continue et de gestion de projet","Contact client","Formation technique "], [], "#5C6BC0", "Lyon"));

/*
 Qt, UML, etc.
 */
    this.expPro.push(new Job("CHU", "De avr. 2010", "à juin 2010", "Développeur stagiaire", "Création d’un logiciel de paramétrage et d’automatisation d’un laser médicale.", [], ['assets/svg/cpp.svg'], "#5C6BC0", "Clermont-Ferrand"));

    this.formations.push(new Job("ISIMA", "De sept. 2011", "à sept. 2014", "Ecole d'ingénieur", "", [], [], "#43A047", "Clermont-Ferrand"));

    this.formations.push(new Job("Lycée Lafayette", "De sept. 2010", "à sept. 2011", "Classe préparatoire aux grandes écoles ( CPGE ATS )", "", [], [], "#43A047", "Clermont-Ferrand"));

    this.formations.push(new Job("IUT", "De sept. 2011", "à sept. 2014", "Institut Universitaire de Technologie", "", [], [], "#43A047", "Aubiére"));
  }

  ngOnInit() {
  }

}
