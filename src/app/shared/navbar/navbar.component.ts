import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public logged: boolean;

  constructor() {
    this.logged = false;
  }

  ngOnInit(): void {
    this.permissions();
  }

  permissions() {
    const token = sessionStorage.getItem('token');
    console.log(token);
    if (token != null) {
      this.logged = true;
    }
  }

  logout() {
    sessionStorage.removeItem('token');
  }
}
