import { Component, VERSION } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  /*constructor(
    private app
  )*/
  name = 'Angular ' + VERSION.major;
}
