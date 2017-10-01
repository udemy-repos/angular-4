import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output()
  serverCreated = new EventEmitter<{serverName: string, serverType: string, serverContent: string}>();
  @Output()
  bluprintCreated = new EventEmitter<{serverName: string, serverType: string, serverContent: string}>();
  
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit({
      serverType: 'server',
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.bluprintCreated.emit({
      serverType: 'blueprint',
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }
}
