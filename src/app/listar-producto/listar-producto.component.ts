import { Component } from '@angular/core';
import { Producto } from '../producto';
import { OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit{

  productos:Producto[];

  constructor(private productoService:ProductoService){

  }
  ngOnInit(): void {
    this.obtenerProductos();
    
  }

  private obtenerProductos(){
    this.productoService.obtenerListaDeProductos().subscribe(dato=> {
      this.productos = dato;
    }) 
    
  } 

}
