import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
  
})
export class CvComponent implements OnInit {
   

  expPro: any[] = [];
  jobs: FirebaseListObservable<any[]>;
  formations: FirebaseListObservable<any[]>;

  private datasets = [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3]
    }
  ];

  private labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];

  private options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };



  constructor(af: AngularFire) {

    this.jobs = af.database.list('jobs');
    this.formations = af.database.list('formations');

    /* 
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



Compétences:   maven, mockito, talend, JEE, shell 

    this.expPro.push(new Job("WORLDLINE", "De avr. 2013", "à sept. 2013", "Développeur stagiaire", "Conception, développement, maintenance et déploiement d'applications Web JEE. Stage effectué dans le cadre du programme pédagogique de deuxième année de l'ISIMA.", ['Intégration aux équipes de Worldline',"Conception et développement d'évolutions",'Maintenance des services en place',"Prise en main des outils et des méthodes d'intégration continue et de gestion de projet","Contact client","Formation technique "], [], "#5C6BC0", "Lyon"));

 
    this.expPro.push(new Job("CHU", "De avr. 2010", "à juin 2010", "Développeur stagiaire", "Création d’un logiciel de paramétrage et d’automatisation d’un laser médicale.", [], ['assets/svg/cpp.svg'], "#5C6BC0", "Clermont-Ferrand"));

    this.formations.push(new Job("ISIMA", "De sept. 2011", "à sept. 2014", "Ecole d'ingénieur", "", [], [], "#43A047", "Clermont-Ferrand"));

    this.formations.push(new Job("Lycée Lafayette", "De sept. 2010", "à sept. 2011", "Classe préparatoire aux grandes écoles ( CPGE ATS )", "", [], [], "#43A047", "Clermont-Ferrand"));

    this.formations.push(new Job("IUT", "De sept. 2011", "à sept. 2014", "Institut Universitaire de Technologie", "", [], [], "#43A047", "Aubiére"));
*/  
}

  ngOnInit() {
  }

}
