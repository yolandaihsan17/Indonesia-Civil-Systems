import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-darurat',
  templateUrl: './darurat.component.html',
  styleUrls: ['./darurat.component.scss']
})
export class DaruratComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Darurat') }

  ngOnInit(): void {
  }

}
