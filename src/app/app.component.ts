import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, HostListener, OnChanges, OnInit, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { MatSidenav } from '@angular/material/sidenav';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition('void => *', [
          style({
            // transform: 'translateX(-100%)',
            opacity: 0,
            borderRadius: '50%',
          }),
          animate(500)
        ]),
        transition('* => void', [
          animate('0.2s 100ms', style({
            height: '100%',
            width: '100%',
            opacity: 1,
            borderRadius: '0px',
            // transform: 'translateX(100%)'
          }))
        ])
      ])
  ]
})
export class AppComponent implements OnInit, OnChanges {
  @ViewChild('drawer') drawer: MatSidenav
  title = ""
  colTotal = 10
  showFiller = false;

  public constructor(private router: Router, private titleService: Title, private location: Location) {}

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth >= 1023) {
      if (this.colTotal != 10) {
        this.colTotal = 10
        this.drawer.close()
      }
    } else {
      if (this.colTotal != 1) {
        this.colTotal = 1
      }
    }
  }
  ngOnInit() {
    this.colTotal = window.innerWidth > 1023 ? 10 : 1
    // this.title = this.titleService.getTitle()
    console.log(this.title)

    this.router.events.subscribe(res => {
      this.title = this.titleService.getTitle()
      console.log(this.title)
    })
  }

  ngOnChanges() {
    console.log(this.title)
  }

  DrawerToggle(event) {
    if (this.colTotal === 1) {
      this.drawer.toggle()
    }
  }

  back(){
    this.location.back()
  }
}
