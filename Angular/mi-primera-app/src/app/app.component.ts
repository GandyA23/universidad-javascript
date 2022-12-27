import { Component } from '@angular/core';

// Configuración de un componente
@Component({
  // Nombre de la etiqueta html
  selector: 'app-root',

  // Etiquetas HTML que contiene el componente
  templateUrl: './app.component.html',

  // Estilos para el componente
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Variables/Atributos dentro del componente
  className = 'AppComponent';
  title = 'Mi primera aplicación en Angular';

  // Para hacer uso de variables en otras, es necesario usar la palabra reservada this
  saludo = `Saludos desde el componente  ${this.className}`;
}
