import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-kependudukan',
  templateUrl: './kependudukan.component.html',
  styleUrls: ['./kependudukan.component.scss']
})
export class KependudukanComponent implements OnInit {

  constructor(private title: Title) {
    this.title.setTitle('Kependudukan')
  }

  ngOnInit(): void {
  }

}
