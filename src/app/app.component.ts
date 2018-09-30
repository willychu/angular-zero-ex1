import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';
  keywordCount = 0;
  constructor() {
  }
  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title  = 'The Will Will Web';
    }
  }
  keyupAction($event: KeyboardEvent) {
    if ($event.key === 'Escape') {
      (<HTMLInputElement>$event.target).value = '';
    }
    this.keywordCount = (<HTMLInputElement>$event.target).value.length;
  }
}
