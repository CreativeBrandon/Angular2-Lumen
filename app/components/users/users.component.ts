import { Component, OnInit } from '@angular/core';

import { Users} from "./shared";
import { UsersService} from "./shared/users.service";
//import { Foo, FooService } from "../foo";

@Component({
  selector: 'users-list',
  moduleId: module.id,
  templateUrl: './users.component.html',
  providers: [UsersService]
})

export class UsersComponent implements OnInit {
    users:Users[] = [];

    constructor(private usersService: UsersService) {}

    ngOnInit() {
        this.usersService.getUsers()
        .then(users => this.users = users);
    }
}
