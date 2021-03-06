import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  title = 'The Will Will Web';
  titleSize = 32;
  isHighlight = false;

  constructor() { }

  ngOnInit() {
  }

  changeTitle() {
    this.title += ' !';
    this.titleSize++;
    this.isHighlight = !this.isHighlight;
  }

}
