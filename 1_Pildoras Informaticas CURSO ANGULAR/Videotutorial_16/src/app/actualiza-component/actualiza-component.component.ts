import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosServiceTsService } from '../empleados.service.ts.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css'],
})
export class ActualizaComponentComponent {
  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;
  accion: number;

  empleados: Empleado[] = [];
  indice: number;

  constructor(
    private router: Router,
    private miServicio: ServicioEmpleadosService,
    private empleadosService: EmpleadosServiceTsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
    this.indice = this.route.snapshot.params['id'];
    /* let empleado: Empleado = this.empleados[this.indice]; */
    let empleado: Empleado = this.empleadosService.encontrarEmpleado(
      this.indice
    );
    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
    this.accion = parseInt(this.route.snapshot.queryParams['accion']);
  }

  /*   actualizaEmpleado() {
    let miEmpleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario
    );
    //this.miServicio.muestraMensaje('Nombre del empleado: ' + miEmpleado.nombre);
    this.empleadosService.actualizarEmpleado(this.indice, miEmpleado);
    this.router.navigate(['']);
  }

  eliminarEmpleado() {
    this.empleadosService.borrarEmpleado(this.indice);
    this.router.navigate(['']);
  } */

  volverHome() {
    this.router.navigate(['']);
  }

  actualizaEmpleado() {
    //Si "accion=1" actualiza Empleado
    if (this.accion == 1) {
      let miEmpleado = new Empleado(
        this.cuadroNombre,
        this.cuadroApellido,
        this.cuadroCargo,
        this.cuadroSalario
      );
      //this.miServicio.muestraMensaje('Nombre del empleado: ' + miEmpleado.nombre);
      this.empleadosService.actualizarEmpleado(this.indice, miEmpleado);
      this.router.navigate(['']);
      //Si "accion=2" elimina Empleado
    } else {
      this.empleadosService.borrarEmpleado(this.indice);
      this.router.navigate(['']);
    }
  }
}
