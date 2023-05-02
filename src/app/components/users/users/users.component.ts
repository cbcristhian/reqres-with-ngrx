import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { Data } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  title = 'Users';
  users: Data[] = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((Response) => {
      this.users = Response.data;
      console.log(this.users);
    });
  }
}
