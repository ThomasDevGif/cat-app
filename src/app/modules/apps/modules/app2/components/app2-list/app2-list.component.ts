import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app2-list',
  templateUrl: './app2-list.component.html',
  styleUrls: ['./app2-list.component.scss']
})
export class App2ListComponent {

  items = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6'
  ];

  selectedItems: string[] = [];

  constructor() { }

  addItem(item: string): void {
    this.selectedItems.push(item);
  }

  removeItem(item: string): void {
    const index = this.selectedItems.indexOf(item);
    this.selectedItems.splice(index, 1);
  }
}
