import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styles: [
    `
    h3 {
      padding:20px;
      background-color: mistyrose;
      border: 1px solid red;
      color: green; 
    }
    `,
  ],
})
export class ExtraComponent {}
