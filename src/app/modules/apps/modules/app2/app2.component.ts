import { Component, OnInit } from '@angular/core';
import { NavItem } from '../../../../shared/models/nav-item';
import { Zone } from '../../../../shared/models/zone';
import { NavbarService } from '../../../../shared/services/navbar.service';

const SIDE_ITEMS: NavItem[] = [
  {
    title: 'Drag & drop',
    link: 'apps/app2/drag'
  }, {
    title: 'Liste',
    link: 'apps/app2/list'
  }, {
    title: 'Arborescence',
    link: 'apps/app2/tree'
  }
];

@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.scss']
})
export class App2Component implements OnInit {

  private zones: Zone[] = [
    {
      title: 'Zone D',
      navItems: SIDE_ITEMS
    }, {
      title: 'Zone E',
      navItems: [ SIDE_ITEMS[0] ]
    }, {
      title: 'Zone F',
      navItems: [ SIDE_ITEMS[1], SIDE_ITEMS[2] ]
    }
  ];

  constructor(private navbarService: NavbarService) { }

  ngOnInit(): void {
    this.navbarService.zones = this.zones;

    this.navbarService.selectedZone = this.zones[0];
  }

}
