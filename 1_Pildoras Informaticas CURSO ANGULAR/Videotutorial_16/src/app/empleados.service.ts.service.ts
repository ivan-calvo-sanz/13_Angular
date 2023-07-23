import { Injectable } from '@angular/core';
import { DataServices } from './data.services';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable({
  providedIn: 'root',
})
export class EmpleadosServiceTsService {
  constructor(
    private servicioVentanaEmergente: ServicioEmpleadosService,
    private dataService: DataServices
  ) {}

  empleados: Empleado[] = [];
  /* Creamos un Array con la info simulando que es el Servicio el que 
  recupera de una BBDD esta información */
  /*   empleados: Empleado[] = [
    new Empleado('Juan', 'Diaz', 'Presidente', 7500),
    new Empleado('Ana', 'Martín', 'Directora', 5500),
    new Empleado('Maria', 'Fernandez', 'Jefa sección', 3500),
    new Empleado('Laura', 'López', 'Administrativo', 2500),
  ]; */

  setEmpleados(misEmpleados: Empleado[]) {
    this.empleados = misEmpleados;
  }

  obtenerEmpleados() {
    //devuelve un Observable de la BBDD
    //Observable permiten operaciones Asíncronas para obtener info de una BBDD sin tener que estar realizando peticiones repetitivas
    //Objeto que se encuentra vijilante continuamente de la BBDD por si se produce cualquier modificación en ella
    return this.dataService.cargarEmpleados();
  }

  agregarEmpleadoServicio(empleado: Empleado) {
    this.servicioVentanaEmergente.muestraMensaje(
      'Persona que se va a agregar: ' +
        '\n' +
        empleado.nombre +
        '\n' +
        'Salario: ' +
        empleado.salario
    );
    this.empleados.push(empleado);
    this.dataService.guardarEmpleado(this.empleados);
  }

  encontrarEmpleado(indice: number): Empleado {
    let empleado: Empleado = this.empleados[indice];
    return empleado;
  }

  actualizarEmpleado(indice: number, miEmpleado: Empleado) {
    this.empleados[indice].nombre = miEmpleado.nombre;
    this.empleados[indice].apellido = miEmpleado.apellido;
    this.empleados[indice].cargo = miEmpleado.cargo;
    this.empleados[indice].salario = miEmpleado.salario;
    this.dataService.actualizarEmpleado(indice, miEmpleado);
  }

  borrarEmpleado(indice: number) {
    //eliminamos del array el empeado
    this.empleados.splice(indice, 1);
    //eliminamos empleado de la BBDD (en Firebase se descuadran los índices)
    this.dataService.eliminarEmpleado(indice);
    //si en el Array empleados existen empleados que vuelva a guardar los empleados en la BBDD
    //así estamos recolocando los id en la BBDD
    if (this.empleados != null)
      this.dataService.guardarEmpleado(this.empleados);
  }
}
