import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosServiceTsService } from '../empleados.service.ts.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
})
export class HomeComponentComponent implements OnInit {
  titulo = 'Listado de Empleados';
  empleados: Empleado[] = [];

  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;

  constructor(
    private miServicio: ServicioEmpleadosService,
    private empleadosService: EmpleadosServiceTsService
  ) {
    //this.empleados = this.empleadosService.empleados;
  }
  ngOnInit(): void {
    //this.empleados = this.empleadosService.empleados;
    console.log(this.empleadosService.obtenerEmpleados());
    //para ver los datos que devuelve el Observable hay que subcribirse a el
    //en la variable q se le indica "misEmpleados" seva guardando los datos
    this.empleadosService.obtenerEmpleados().subscribe((misEmpleados) => {
      console.log(misEmpleados);
      //guardo los valores que vienen del Observable "misEmpleados"
      this.empleados = Object.values(misEmpleados);
      //envio estos valores a guardar al Servicio EmpleadosServiceTsService
      this.empleadosService.setEmpleados(this.empleados);
    });
  }

  agregarEmpleado() {
    let miEmpleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario
    );
    //this.miServicio.muestraMensaje('Nombre del empleado: ' + miEmpleado.nombre);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
  }
}
