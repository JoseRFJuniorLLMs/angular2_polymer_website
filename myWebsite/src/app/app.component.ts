import { Component } from '@angular/core';
import {Router, Event, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  leftMenu: boolean;

  constructor(public router:Router) {
        this.router.events.subscribe(
            (event:Event) => {
                if (event instanceof NavigationEnd) {
                  console.log("change page: "+ event.urlAfterRedirects,(<any>window).dataLayer);
                    (<any>window).dataLayer.push({
                        event: 'pageView',
                        action: event.urlAfterRedirects,
                });

                console.log((<any>window).dataLayer)

                }
            });
            this.leftMenu = false; 
          }

  title = 'app works! 3';

  toggleLeft() {
    this.leftMenu = !this.leftMenu;
  }
}
