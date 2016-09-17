import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  leftMenu: boolean;

  constructor() { this.leftMenu = false; }

  title = 'app works! 3';

  toggleLeft() {
    this.leftMenu = !this.leftMenu;
  }
}
