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
    usersSample: Object;
    mongoUsers: Object;
    error: any;

    constructor(private usersService: UsersService) {}

    ngOnInit() {
        this.getLocalUsers();
        this.getSampleUsers();
        this.getMongoUsers();
    }

    private getLocalUsers(){
        this.usersService.getUsers()
        .then(users => this.users = users);
    }

    private getSampleUsers(){
        this.usersService.getSampleUsers()
        .then(usersSample => this.usersSample = usersSample)
        .catch(error => this.error = error);
    }

    private getMongoUsers(){
        this.usersService.getMongoUsers()
        .then(mongoUsers => this.mongoUsers = mongoUsers)
        .catch(error => this.error = error);
    }
}
