import { Component, OnInit } from '@angular/core';
import { LicorService } from "../services/licor.service";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {
  allProducts = []
  constructor(private licorService: LicorService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.licorService.getProducts().subscribe((data) => {
      this.allProducts = data.productos
      console.log(this.allProducts)

    })
    this.activatedRoute.queryParams.subscribe(query => {
      const buscador  = query["licor"]
      if (buscador) {
        console.log("query ", buscador)
        this.allProducts.forEach((product) => {
          if (product['titulo'] == query["licor"]) {
            console.log("product ", product)
            this.allProducts.push(product)
          }
        })
      }
    })

  }

}
