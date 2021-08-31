import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';
import { SalesService } from 'src/app/services/sales.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-compra',
  templateUrl: './formulario-compra.component.html',
  styleUrls: ['./formulario-compra.component.css']
})
export class FormularioCompraComponent implements OnInit {

  formularios: FormGroup;
  title = "Registro de compras";
  client_id: string = '';
  clientes: any[] = [];
  total_price: number = 0;
  errors: any = null;

  constructor(
    private clientService: ClienteService,
    private saleService: SalesService
  ) {
    this.formularios = this.setValidation();
  }

  ngOnInit(): void {
    this.getAllClient()
    this.setDataForm();
  }

  setValidation() {
    return new FormGroup({
      product_name: new FormControl(null, Validators.required),
      unit_price: new FormControl(null, Validators.required),
      discount_percent: new FormControl(null, [Validators.required, Validators.max(99)]),
      state: new FormControl(null, Validators.required),
      total_price: new FormControl(null, Validators.required),
      amount: new FormControl(null, Validators.required),
    });
  }

  setDataForm() {
    const amount = 10;
    const unit_price = 100;
    const total_price = amount * unit_price;
    const data = {
      product_name: '',
      unit_price,
      discount_percent: 10,
      state: '',
      total_price,
      amount,
    }

    this.formularios.setValue(data);
  }

  submit() {
    this.errors = null;
    if (this.client_id === '' || this.client_id === undefined) {
      Swal.fire(
        'malo!',
        `EL cliente se registro correctamente!`,
        'error'
      );
      return;
    }
    let data: any = this.formularios.value;
    data.client_id = this.client_id;
    this.saleService.storeSale(data)
      .subscribe((resp: any) => {
        Swal.fire(
          'malo!',
          `Se registro la venta correctamente!`,
          'success'
        );
      }, err => {
        this.errors = err.error.errors.client_id;
      });
  }

  getAllClient() {
    this.clientService.getAllClient()
      .subscribe((resp: any) => {
        this.clientes = resp.data;
        console.log(this.clientes);
      });
  }

  calculoPrecioTotal(): void {

    const amount = this.formularios.controls['amount'].value;
    const unit_price = this.formularios.controls['unit_price'].value;
    this.total_price = amount * unit_price;

  }
  
}
