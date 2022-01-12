import { Component, OnInit } from '@angular/core';
import { NavItem } from '../../../../shared/models/nav-item';
import { NavbarService } from '../../../../shared/services/navbar.service';
import { Zone } from 'src/app/shared/models/zone';

const SIDE_ITEMS: NavItem[] = [
  {
    title: 'Gestion du tri',
    link: 'apps/app1/sort'
  }, {
    title: 'Gestion de la sélection',
    link: 'apps/app1/check'
  }
];

@Component({
  selector: 'app-app1',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.scss']
})
export class App1Component implements OnInit {

  private zones: Zone[] = [
    {
      title: 'Zone A',
      navItems: [ SIDE_ITEMS[0] ]
    }, {
      title: 'Zone B',
      navItems: [ SIDE_ITEMS[1] ]
    }, {
      title: 'Zone C',
      navItems: SIDE_ITEMS
    }
  ];

  constructor(private navbarService: NavbarService) { }

  ngOnInit(): void {
    this.navbarService.zones = this.zones;

    this.navbarService.selectedZone = this.zones[0];
  }

}
