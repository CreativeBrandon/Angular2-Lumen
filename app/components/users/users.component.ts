import { Component, OnInit } from '@angular/core';

import { Users, UsersService} from "./shared";
import { Foo, FooService } from "../foo";

@Component({
  selector: 'users-list',
  template: '<p>This is Users Component</p>'
})

export class UsersComponent implements OnInit {
    users:Users[] = [];

    constructor(private usersService: UsersService) {}

    ngOnInit() {
        console.log('worked ');
        this.usersService.getUsers()
        .then(users => this.users = users);
    }
}
