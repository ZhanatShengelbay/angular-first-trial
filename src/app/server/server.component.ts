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

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreationServer() {
    this.serverStatus = 'Server was created!';
  }
  onUpdateServer(event: any){
    console.log(event);
  }

  ngOnInit() {}
}
