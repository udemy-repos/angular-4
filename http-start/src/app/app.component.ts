import { ServerService } from './server.service';
import { Component, OnInit } from '@angular/core';

import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  servers = [];

  constructor(private serverService: ServerService) {}

  ngOnInit() {
    this.serverService.getServers()
      .subscribe(
        (servers: any[]) => this.servers = servers
      );
  }

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  onSaveServers() {
    this.serverService.saveServers(this.servers)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
