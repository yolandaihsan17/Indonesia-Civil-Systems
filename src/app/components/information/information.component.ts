import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
  animations: [
    trigger('showDesc', [
    ])
  ],
})
export class InformationComponent implements OnInit {

  displayDescr = false

  constructor() { }

  ngOnInit(): void {

  }

}
