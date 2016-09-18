import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  inputs: ['leftmenu'],
  outputs: ['onAdd']
})
export class MenuComponent implements OnInit {

  leftMenu: boolean;
  constructor() { 
  }

  toggleLeft() {
    this.leftMenu = !this.leftMenu;
  }

  ngOnInit() {
  }

}
