import { Component } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {

  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    this.serverId = Math.random()*1000;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  getServerStatus(): String {
    return this.serverStatus;
  }
}
