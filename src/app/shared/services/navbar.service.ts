import { EventEmitter, Injectable } from '@angular/core';
import { Zone } from '../models/zone';
import { SidenavService } from './sidenav.service';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  /** Tabs in navbar */
  private _zones: Zone[];

  get zones(): Zone[] {
    return this._zones;
  }

  set zones(zones: Zone[]) {
    this._zones = zones;
    this.zonesChange.emit(this._zones);
  }

  /** Selected tab */
  private _selectedZone: Zone;

  get selectedZone(): Zone {
    return this._selectedZone;
  }

  set selectedZone(zone: Zone) {
    this._selectedZone = zone;
    this.selectedZoneChange.emit(this._selectedZone);
    this.sidenavService.setSidenavItems(this._selectedZone.navItems);
  }

  zonesChange = new EventEmitter<Zone[]>();

  selectedZoneChange = new EventEmitter<Zone>();

  constructor(private sidenavService: SidenavService) { }
}
