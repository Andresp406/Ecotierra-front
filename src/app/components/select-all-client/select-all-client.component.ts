import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

export interface IEmitterObject {
  data: string;
  typeSelect: boolean;
}
@Component({
  selector: 'app-select-all-client',
  templateUrl: './select-all-client.component.html',
  styleUrls: ['./select-all-client.component.css']
})
export class SelectAllClientComponent implements OnInit {

  clientes: any[] = [];
  @Output() onChangeClient = new EventEmitter<IEmitterObject>()
  constructor(
    private clientService: ClienteService,
  ) { }

  ngOnInit(): void {
    this.getAllClient()
  }


  cambioCliente(id: any) {
    console.log('Emitiendo un objeto');
    const data: IEmitterObject = {
      data: id,
      typeSelect: true
    }

    this.onChangeClient.emit(data);
  }

  getAllClient() {
    this.clientService.getAllClient()
      .subscribe((resp: any) => {
        this.clientes = resp.data;
        console.log(this.clientes);
      });
  }

}
