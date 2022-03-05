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
        this.allProducts.forEach((product) => {
          if (product['titulo'] == query["licor"]) {
            productsAux.push(product)
          }
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
