import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <toDoMain></toDoMain>  
  `,
})
export class AppComponent  { name = 'Angular'; }
