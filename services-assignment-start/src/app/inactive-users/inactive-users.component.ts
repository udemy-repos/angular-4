import { UsersService } from './../users.service';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  
  @Input() users: string[];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.users = this.usersService.inactiveUsers;
  }
  
  onSetToActive(id: number) {
    this.usersService.setToActive(id);
  }
}
