import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private http: HttpClient
    ) { 
    console.log('servicio inicializado');

  }

  storeClient(cliente: any){
    const url = `${environment.urlBase}/api/v1/client/store`;
    return this.http.post(url, cliente);

  }

  getAllClient(){
     const url = `${environment.urlBase}/api/v1/client?search=`;
     return this.http.get(url);
  }
}
