import { Component } from '@angular/core';
import {Router, Event, NavigationEnd} from '@angular/router';
declare var ga:Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  leftMenu: boolean;
  public currentRoute: string = '';

  constructor(public router:Router) {
    router.events.subscribe((route) => {
      var newRoute = route.url || '/';
      console.log(newRoute);
      if(newRoute !== this.currentRoute) {
        ga('send', 'pageview', newRoute);
        this.currentRoute = newRoute;
      }
    });
            this.leftMenu = false; 
          }

  title = 'app works! 3';

  toggleLeft() {
    this.leftMenu = !this.leftMenu;
  }
}
