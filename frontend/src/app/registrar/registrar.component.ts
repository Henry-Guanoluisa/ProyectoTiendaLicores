import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LicorService } from '../services/licor.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  displayAgregar = false
  product = {
    titulo: "",
    precio: "",
    imagen: ""
  }
  productUpdate = {
    titulo: "",
    precio: "",
    imagen: "",
    _id:""
  }
  productsGet = []
  displayActualizar = false
  idProduct: any
  constructor(private licorService: LicorService, private router:Router) { }

  ngOnInit(): void {
    this.licorService.getProducts().subscribe((data:any)=>{
      this.productsGet = data.productos
    })
  }
  saveProduct(forma:any){
    this.displayAgregar = false
    console.log(this.product)
    this.licorService.saveProduct(this.product).subscribe(()=>{
      forma.reset()
      window.location.reload()
    })
  }
  eliminarProduct(id: any){
    this.licorService.deleteProduct(id).subscribe(()=>{
      console.log("producto eliminado")
      window.location.reload()
    }, error => {
      console.log("producto no eliminado")
    })
  }

  getIdProduct(id:any){
    this.idProduct = id
    this.licorService.getProduct(this.idProduct).subscribe((product)=>{
      console.log(product)
      this.productUpdate.titulo = product.producto["titulo"]
      this.productUpdate.precio = product.producto["precio"]
      this.productUpdate.imagen = product.producto["imagen"]
      this.productUpdate._id = product.producto["_id"]
      this.displayActualizar = true
    })
  }
  updateProduct(forma:any){
    this.licorService.updateProduct(this.productUpdate).subscribe(()=>{
      window.location.reload()
      forma.reset()
      console.log("prodcuto actualizado")
      this.displayActualizar = false
    }, error => {
      console.log("no se pudo actualizar")
    })
  }

}
