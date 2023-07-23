import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
//Importamos Firebase
import firebase from 'firebase/compat/app';
//Importamos la autentificación de Firebase
import 'firebase/compat/auth';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class LoginService {
  constructor(private router: Router, private cookies: CookieService) {}

  //por seguridad cuando un Usuario se registra en una página en cada petición
  //se le añade un token que se ha generado al autentificarse el Usuario
  //es como una firma o código de Seguridad
  token: string;

  login(email: string, password: string) {
    //comprobamos que el email y password del Usuario introducido coincide con el guardado en la BBDD
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        firebase
          .auth()
          .currentUser?.getIdToken()
          .then((token) => {
            //el token que nos devuelve la BBDD lo guardamos en la variable "token"
            this.token = token;
            //guardamos en la cookie el token generado ("nombre de la cookie","valor")
            this.cookies.set('token', this.token);
            //hacemos que la aplicación nos devuelva a la dirección de inicio
            this.router.navigate(['/']);
          });
      });
  }

  // función get para que nos devuelva el "token"
  getIdToken() {
    /* return this.token; */
    return this.cookies.get('token');
  }

  /*   estaLogueado() {
    console.log(this.token);
    return this.token;
  } */

  //cambia el token cuando el usuario hace "logout"
  logout() {
    //cuando el Usuario hace Logout cambiamos el "token" y que redirecciones al index
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.token = '';
        this.cookies.set('token', this.token);
        this.router.navigate(['/']);
        //hacemos que actualice la página
        window.location.reload();
      });
  }
}
