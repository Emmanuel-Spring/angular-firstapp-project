import { Injectable } from '@angular/core';
import { CLIENTES } from "./clientes.json";
import { Cliente } from "./cliente";
import {Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { map } from "rxjs/operators";


@Injectable()
export class ClienteService {

  private urlEndPoint: string = 'http://localhost:9000/api/clientes';

  private HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map( ( response ) => response as Cliente[])
    );
  }

  create(cliente: Cliente) : Observable<Cliente> {
    return this.http.post<Cliente>(this.urlEndPoint, cliente, {headers: this.HttpHeaders})
  }

}
