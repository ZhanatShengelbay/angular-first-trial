import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
    `
  h3 {
    color: blue; 
  }
  `,
  ],
})
export class UserComponent {
  userName: string = '';
  usernameStatus = false;

  onTypeName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;

    while (this.userName.length > 0) {
      this.usernameStatus = true;
    }
  }
  onClickButton(event: Event) {
    this.userName = '';
  }
}
