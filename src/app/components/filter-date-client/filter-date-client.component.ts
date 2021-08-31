import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
import { IEmitterObject } from '../select-all-client/select-all-client.component';

@Component({
  selector: 'app-filter-date-client',
  templateUrl: './filter-date-client.component.html',
  styleUrls: ['./filter-date-client.component.css']
})
export class FilterDateClientComponent implements OnInit {

  @Output() onChangeDates = new EventEmitter<IEmitterObject>();

  constructor() { }

  ngOnInit(): void {
  }

  getDates(start: string, end: string) {
    if(start === '' || end === '') {
      Swal.fire(
        'Error',
        'Seleccione las dos fechas',
        'error'
      )
      return;
    }
    const data: IEmitterObject = {
      data: `${start}/${end}`,
      typeSelect: false,
    };
    this.onChangeDates.emit(data);
  }

}
