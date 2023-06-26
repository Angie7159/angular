import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private baseURL = "http://localhost:8080/ruta/productos"

  constructor(private httpClient : HttpClient) { }

  obtenerListaDeProductos():Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(`${this.baseURL}`);
  }
}
