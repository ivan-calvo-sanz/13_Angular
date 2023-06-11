import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'Registro de Usuarios';
  mensaje = '';
  registrado = false;
  nombre: string = '';
  apellido: string = '';
  cargo: string = '';
  entradas = [
    { titulo: 'Python cada dia más presente' },
    { titulo: 'Java presenta desde hace 20 años' },
    { titulo: 'JavaScript cada vez más funcional' },
    { titulo: 'Kotlin potencia para tus apps' },
  ];

  registrarUsuario() {
    this.registrado = true;
    this.mensaje = 'Usuario registrado con éxito';
  }
}
