import { Component } from '@angular/core';

@Component({
  selector: 'ht-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  routes = [
    {
      path: '',
      text: 'Home',
    },
    {
      path: 'forms',
      text: 'Forms',
    },
    {
      path: 'testing',
      text: 'Testing',
    },
    {
      path: 'components',
      text: 'Components',
    },
    {
      path: 'redux',
      text: 'Redux',
    },
  ];
}
