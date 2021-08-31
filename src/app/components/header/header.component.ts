import { EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() DrawerToggle = new EventEmitter<boolean>()
  @Input() DrawerOpened: boolean = true
  @Input() ColTotal: number = 10

  constructor() { }

  ngOnInit(): void {
  }

  toggleDrawer() {
    this.DrawerOpened = !this.DrawerOpened
    this.DrawerToggle.emit(this.DrawerOpened)
  }

}
