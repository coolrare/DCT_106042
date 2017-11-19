import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  searchText = '';

  constructor(public dataSvc: DataService) {
    console.log(dataSvc);
  }

  searchChange(value) {
    this.searchText = value;
  }

  removeArticle($event) {
    // 方法一
    // for (let i = this.articles.length - 1; i >= 0; i--) {
    //   let item = this.articles[i];
    //   if (item.id === $event) {
    //     this.articles.splice(i, 1);
    //   }
    // }

    // 方法二
    // this.articles = this.articles.filter((item) => {
    //   return item.id !== $event;
    // });

    this.dataSvc.articles = this.dataSvc.articles.filter(item => item.id !== $event);
  }

}
