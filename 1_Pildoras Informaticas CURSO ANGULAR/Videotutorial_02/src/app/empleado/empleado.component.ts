import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template:"<p>Aquí iría un empleado</p>",
  styleUrls: ['./empleado.component.css'],
  //styles:["p{background-color:red}"]
})
export class EmpleadoComponent {
  nombre = 'Juan';
  apellido = 'Diaz';
  edad = 20;
  empresa = 'Google';
  habilitaCuadro = false;
  habilitaChech = false;
  textoRegistro = 'No hay nadie registrado';

  getRegistroUsuario() {
    this.habilitaChech = false;
  }

  setUsuario() {
    //alert('Usuario registrado');
    this.textoRegistro = 'Usuario registrado';
  }
  setRegistro(event: Event) {
    //<HTMLInputElement>event.target <- realiza un casting, transformando el Objeto a un Objeto tipo HTMLInputElement
    if ((<HTMLInputElement>event.target).value == 'SI') {
      this.textoRegistro = 'Usuario registrado';
    } else {
      this.textoRegistro = 'Usuario NO registrado';
    }
  }
}
