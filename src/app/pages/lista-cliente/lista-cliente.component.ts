import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {
  title: string = 'Listado de Clientes';
  clientes: any[] = [];
  constructor(
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.getAllClient();
  }

  getAllClient() {
    this.clienteService.getAllClient().subscribe((response: any) => {
      console.log(response);
      this.clientes = response.data;
    });
  }

}
