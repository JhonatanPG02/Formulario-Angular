import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public form: FormGroup
  public listStudents: Array<any> = [
    {
      documentNumber: '34567843',
      name: 'Carlos',
      lastName: 'Ramirez García',
      course: 'React',
      turn: 'Tarde',
      email: 'carlos2286@gmail.com',
    },
    {
      documentNumber: '34565467',
      name: 'Rosa',
      lastName: 'Rufino Perez',
      course: 'Angular',
      turn: 'Mañana',
      email: 'rosa.perez@gmail.com',
    },
    {
      documentNumber: '44234690',
      name: 'Antonio',
      lastName: 'Trujillo Vertiz',
      course: 'Angular',
      turn: 'Tarde',
      email: 'antonio_355@gmail.com',
    },

  ]


  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      documentNumber: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/^\d+$/),
          Validators.minLength(8),
          Validators.maxLength(8)
        ])],
      name: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/^[a-zA-ZÁÉÍÓÚáéíóú\s]+$/),
          Validators.minLength(3)
        ])],
      lastName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/^[a-zA-ZÁÉÍÓÚáéíóú\s]+$/),
          Validators.minLength(3)
        ])],
      course: ['', Validators.required],
      turn: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
    console.log(this.form.controls['email'].errors)
  }

  onSubmit() {
    this.listStudents.push(this.form.value)
    this.form.reset()
  }

}
