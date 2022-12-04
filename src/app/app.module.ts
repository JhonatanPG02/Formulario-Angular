import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentsComponent } from './pages/students/students.component'

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
