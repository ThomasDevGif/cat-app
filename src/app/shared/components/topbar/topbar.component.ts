import { Component, Input, OnInit } from '@angular/core';
import { NavItem } from '../../models/nav-item';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  navItems: NavItem[] = [
    {
      title: 'Accueil',
      link: 'home',
      icon: 'home'
    }, {
      title: 'Application1',
      link: 'apps/app1',
      icon: 'settings'
    }, {
      title: 'Application2',
      link: 'apps/app2',
      icon: 'settings'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
