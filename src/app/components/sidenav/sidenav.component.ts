import { Component, Input, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() ColTotal: number = 10

  menuList: Menu[] = [
    { displayText: "kependudukan", route: "/kependudukan", icon: 'groups' },
    { displayText: "kesehatan", route: "/kesehatan", icon: 'spa' },
    { displayText: "pajak", route: "/pajak", icon: 'attach_money' },
    { displayText: "pendidikan", route: "/pendidikan", icon: 'school' },
    { displayText: "darurat", route: "/darurat", icon: 'local_police' }
  ]

  selectedMenu: Menu = null


  constructor(
    private router: Router) { }

  ngOnInit(): void {
    // this.selectedMenu = this.menuList[0]
    this.router.events.subscribe((e: NavigationStart) => {
      if (e.url.startsWith('/kependudukan')) {
        this.selectedMenu = this.menuList[0]
      } else if (e.url.startsWith('/kesehatan')) {
        this.selectedMenu = this.menuList[1]
      } else if (e.url.startsWith('/pajak')) {
        this.selectedMenu = this.menuList[2]
      } else if (e.url.startsWith('/pendidikan')) {
        this.selectedMenu = this.menuList[3]
      } else if (e.url.startsWith('/darurat')) {
        this.selectedMenu = this.menuList[4]
      }
    })
  }

  selectMenu(menu: Menu) {
    this.selectedMenu = menu
    this.router.navigate([menu.route])
    // console.log(this.selectedMenu)
  }
}

class Menu { displayText: string; route: string; icon: string }
