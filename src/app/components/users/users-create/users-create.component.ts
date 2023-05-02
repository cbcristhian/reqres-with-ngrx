import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css'],
})
export class UsersCreateComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  createUser() {
    this.userService.createUser(this.form.value).subscribe(
      (Response) => {
        console.log(Response);
        Swal.fire({
          icon: 'success',
          title: 'Register',
          text: 'User Registered!',
        });
        sessionStorage.setItem('token', Response.token);
        this.router.navigate(['/users']);
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.error,
        });
      }
    );
  }
}
