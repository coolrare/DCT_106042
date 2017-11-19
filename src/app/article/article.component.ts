import { Component, OnInit, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleComponent implements OnInit {

  @Input('data') item;
  @Output() removeEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  removeBtnClick() {
    this.removeEvent.emit(this.item.id);
  }

}
