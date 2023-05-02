import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  login() {
    this.userService.login(this.form.value).subscribe((Response) => {
      console.log(Response);
      Swal.fire({
        icon: 'success',
        title: 'Login',
        text: 'User logged!',
      });
      sessionStorage.setItem('token', Response.token);
      this.router.navigate(['/users']);
    });
  }
}
