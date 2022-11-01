import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey: string = 'token';
  constructor(private http: HttpClient) {}

  isLoggedIn() {
    let token = localStorage.getItem(this.tokenKey);
    if (token) {
      return true;
    }
    return false;
  }
  login(user) {
    return this.http.post('https://reqres.in/api/login', user);
  }
  logout() {
    localStorage.removeItem(this.tokenKey);
  }
  getToken() {
    let token = localStorage.getItem(this.tokenKey);
    if (token) {
      return token;
    }
  }
}
