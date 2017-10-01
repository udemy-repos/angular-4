import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {type: "server", name:"Test", content: "Test server"}
  ];

  onServerCreated(serverData: {serverName: string, serverType: string, serverContent: string}) {
    this.serverElements.push({
      type: serverData.serverType,
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintCreated(serverData: {serverName: string, serverType: string, serverContent: string}) {
    this.serverElements.push({
      type: serverData.serverType,
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
}
