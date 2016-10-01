import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import {  Router } from '@angular/router';

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

  constructor(private router:Router) {
    this.links.push(
      { route: '/', label: 'Acceuil' },
      { route: '/cv', label: 'Curriculum vitae' },
      { route: '/lab', label: 'Le lab' },
      { route: '/link', label: 'Liens' }
    )
  }

  getSelected()
  {
    for(let l in this.links)
    {
      if(this.links[l].route.split('/')[1] == this.router.url.split('/')[1])
      {
        return l;
      }
    }
    return '0';
  }

  ngOnInit() {
  }

}
