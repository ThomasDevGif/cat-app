import { Component, Input, OnInit } from '@angular/core';
import { NavItem } from '../../models/nav-item';
import { SidenavService } from '../../services/sidenav.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  sideItems: NavItem[] = [];

  constructor(private sidenavService: SidenavService,
              private router: Router) { }

  ngOnInit(): void {
    this.sidenavService.sidenavItemsChange.subscribe(sideItems => {
      this.sideItems = sideItems;
    });
  }

  goTo(item: NavItem): void {
    this.router.navigate([item.link]);
  }

  isActive(link: string): boolean {
    return this.router.url.indexOf(link) > -1;
  }
}
