import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
    h3 {
      color: dodgerblue; 
    }
    `,
  ],
})
export class ServerComponent {
  allowNewServer = false;
  serverStatus = 'No server was created';
  serverName = 'test';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreationServer() {
    this.serverStatus = 'Server was created! Now name is ' + this.serverName;
  }
  onUpdateServer(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {}
}
