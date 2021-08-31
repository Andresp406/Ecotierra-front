import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.css'],
})
export class FormularioClienteComponent implements OnInit {
  title: string = 'Formulario Cliente';
  formularios!: FormGroup;
  errors:string = '';

  constructor(private clienteService: ClienteService) {
    this.formularios = this.setValidation();
  }

  ngOnInit(): void {
    this.setValueForms();
  }

  setValidation() {
    return (this.formularios = new FormGroup({
      first_name: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ]+$'),
      ]),
      last_name: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ]+$'),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      dni: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('^[0-9]+$'),
      ]),
      birth_date: new FormControl(null, [Validators.required]),
    }));
  }

  setValueForms() {
    const data = {
      first_name: '',
      last_name: '',
      email: '',
      dni: '',
      birth_date: '',
    };
    this.formularios.setValue(data);
  }

  get first_name() {
    return this.formularios.get('first_name');
  }

  submit() {
    this.errors = '';
    if(this.formularios.value === null || this.formularios.value === undefined){
      Swal.fire(
        'Error!',
        `Debe completar todos los campos`,
        'error'
      );
      return;
    }
    const data = this.formularios.value;
    console.log(data);
    this.clienteService.storeClient(data).subscribe(
      (response) => {
        console.log(response);
        Swal.fire(
          'Registro exitoso!',
          `EL cliente ${data.full_name} se registro correctamente!`,
          'success'
        );
        this.formularios.reset();
      },
      (error) => {
        console.log(error.error.errors);
        this.errors = error.error.errors.dni;
        
      }
    );
  }
}
