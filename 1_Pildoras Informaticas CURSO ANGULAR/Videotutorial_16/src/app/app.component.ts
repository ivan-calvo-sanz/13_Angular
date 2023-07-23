import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyCBWurf0UdbG0WUZatcHg7mKYk5hX4fapM',
      authDomain: 'mis-clientes-e023a',
    });
  }

  estaLogueado() {
    return this.loginService.getIdToken();
  }

  logout() {
    this.loginService.logout();
  }
}
