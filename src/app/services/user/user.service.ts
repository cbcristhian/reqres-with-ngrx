import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from 'src/app/shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'https://reqres.in/api/';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<Users> {
    return this.http.get<Users>(this.url + 'users');
  }

  createUser(user: any): Observable<any> {
    return this.http.post(this.url + 'register', user);
  }
  login(data: any): Observable<any> {
    return this.http.post(this.url + 'login', data);
  }
}
