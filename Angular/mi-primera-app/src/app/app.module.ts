import { PersonasComponent } from './personas/personas.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  // Componentes que va a usar la aplicación
  declarations: [
    AppComponent,
    PersonasComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,

    // Necesario para hacer uso de Two-Way Binding
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
