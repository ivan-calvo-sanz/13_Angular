import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EjemplotirarComponent } from './ejemplotirar/ejemplotirar.component';

@NgModule({
  declarations: [
    AppComponent, EmpleadosComponent, EmpleadoComponent, EjemplotirarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
