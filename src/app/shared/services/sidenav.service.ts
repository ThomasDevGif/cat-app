import { EventEmitter, Injectable } from '@angular/core';
import { NavItem } from '../models/nav-item';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  sidenavItemsChange = new EventEmitter<NavItem[]>();

  constructor() { }

  setSidenavItems(sideItems: NavItem[]): void {
    this.sidenavItemsChange.emit(sideItems);
  }

}
