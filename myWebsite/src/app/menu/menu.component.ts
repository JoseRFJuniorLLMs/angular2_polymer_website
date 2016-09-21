import { Component, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  links: any[] = [];
  
  @Output() closeMenu = new EventEmitter<boolean>();

  openClose(val: boolean) {
    this.closeMenu.emit(val);
  }

  constructor() {
    this.links.push(
      { route: '/', label: 'Acceuil' },
      { route: '/cv', label: 'Curriculum vitae' },
      { route: '/lab', label: 'Le lab' },
      { route: '/link', label: 'Liens' }
    )
  }

  ngOnInit() {
  }

}
