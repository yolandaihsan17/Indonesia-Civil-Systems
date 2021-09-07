import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pajak',
  templateUrl: './pajak.component.html',
  styleUrls: ['./pajak.component.scss']
})
export class PajakComponent implements OnInit {

  constructor(private title: Title) {
    this.title.setTitle('Pajak')
  }

  ngOnInit(): void {
  }

}
