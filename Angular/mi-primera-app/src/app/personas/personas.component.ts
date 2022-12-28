/**
 * Este componente fue creado manualmente
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
  disabled : boolean = false;
  mensaje: string = 'No se ha agregado ninguna persona';
  titulo: string = '';

  agregarPersona() {
    this.mensaje = 'Persona agregada';
  }

  modificarTitulo(e: Event) {
    console.log("Entrando al método de modificarTitulo", (<HTMLInputElement> e.target).value);

    // Se realiza el casteo a un objeto HTML para obtener el valor
    this.titulo = (<HTMLInputElement> e.target).value;
  }
}
