import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  selectedMenu: { displayText: string, route: string, icon: string } = null


  constructor(
    private router: Router) { }

  ngOnInit(): void {
    this.selectedMenu = this.menuList[0]
  }

  selectMenu(menu: Menu) {
    this.selectedMenu = menu
    this.router.navigate([menu.route])
    // console.log(this.selectedMenu)
  }
}

class Menu { displayText: string; route: string; icon: string }
