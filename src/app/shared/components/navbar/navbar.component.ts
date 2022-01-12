import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavbarService } from '../../services/navbar.service';
import { Zone } from '../../models/zone';
import { SidenavService } from '../../services/sidenav.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  zones: Zone[];

  selectedZone: Zone;

  private zonesSubscription: Subscription;

  private selectedZoneSubscription: Subscription;

  constructor(private navbarService: NavbarService,
              private sidenavService: SidenavService,
              private router: Router) { }

  ngOnInit(): void {
    this.zones = this.navbarService.zones;

    this.selectedZone = this.navbarService.selectedZone;

    this.zonesSubscription = this.navbarService.zonesChange.subscribe(zones => {
      this.zones = zones;

      if (!this.selectedZone) {
        this.onSelectedTabChange(this.zones[0]);
      }
    });

    this.selectedZoneSubscription = this.navbarService.selectedZoneChange.subscribe(zone => this.onSelectedTabChange(zone));
  }

  ngOnDestroy(): void {
    if (this.zonesSubscription) {
      this.zonesSubscription.unsubscribe();
    }

    if (this.selectedZoneSubscription) {
      this.selectedZoneSubscription.unsubscribe();
    }
  }

  /**
   * Set active tab + emit new side nav items
   * @param zone Selected tab
   */
  onSelectedTabChange(zone: Zone): void {
    this.selectedZone = zone;

    this.sidenavService.setSidenavItems(this.selectedZone.navItems);

    this.router.navigate([ this.selectedZone.navItems[0].link ]);
  }
}
