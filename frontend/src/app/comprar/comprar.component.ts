import { Component, OnInit } from '@angular/core';
import { LicorService } from "../services/licor.service";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {
  allProducts: any[] = []

  constructor(private licorService: LicorService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.searchProducts()
  }

  searchProducts() {
    this.activatedRoute.queryParams.subscribe(query => {
      const buscador = query["licor"]
      let productsAux: any[] = []
      if (buscador) {
        
        productsAux = this.allProducts.filter((product)=>{
          return product['titulo'].indexOf(query["licor"]) == 0
        })
        this.allProducts = [...productsAux]
      } else {
        this.getAllProducts()
      }
    })
  }

  getAllProducts() {
    this.licorService.getProducts().subscribe((data) => {
      this.allProducts = data.productos
    })
  }

}
