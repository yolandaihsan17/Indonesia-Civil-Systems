import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-kesehatan',
  templateUrl: './kesehatan.component.html',
  styleUrls: ['./kesehatan.component.scss']
})
export class KesehatanComponent implements OnInit {

  constructor(private title: Title) {
    this.title.setTitle('Kesehatan')
  }

  ngOnInit(): void {
  }

}
