import { UsersService } from './../users.service';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  @Input() users: string[];

  constructor(private usersService: UsersService) { }
  
  ngOnInit():void {
    this.users = this.usersService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
  }
}
