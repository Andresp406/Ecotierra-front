import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(
    private http: HttpClient
  ) { }

  storeSale(data: any) {
    const url = `${environment.urlBase}/api/v1/sale/store`;
    return this.http.post(url, data);
  }

  getSalesByClientId(id: any) {
    const url = `${environment.urlBase}/api/v1/sale/client/${id}`;
    return this.http.get(url);
  }

  getSalesByDates(dates: string) {
    const url = `${environment.urlBase}/api/v1/sale/filter/${dates}`;
    return this.http.get(url);
  }
}
