import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEmitterObject } from 'src/app/components/select-all-client/select-all-client.component';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-list-compra',
  templateUrl: './list-compra.component.html',
  styleUrls: ['./list-compra.component.css']
})
export class ListCompraComponent {

  title = 'Lista de compras por cliente';
  sales: any[] = [];
  url: string;
  filterDate: boolean = false;

  constructor(
    private saleService: SalesService,
    private activeRouter: ActivatedRoute
  ) { 
    this.url = this.activeRouter.snapshot.url[0].path;
    if(this.url === 'filter-compra') {
      this.filterDate = true;
    }

  }

  cambioCliente(data: any) {
    if(data.typeSelect) {
      this.getSalesSelect(data.data);
    } else {
      this.getSalesDates(data.data);
    }
  }

  getSalesSelect(data: string) {
    this.saleService.getSalesByClientId(data)
      .subscribe( (resp: any) => {
        this.sales = resp.data;
        console.log(this.sales)
      }); 
  }

  getSalesDates(data: string) {
    this.saleService.getSalesByDates(data)
      .subscribe( (resp: any) => {
        this.sales = resp.data;
        console.log(this.sales)
      }); 
  }

}
