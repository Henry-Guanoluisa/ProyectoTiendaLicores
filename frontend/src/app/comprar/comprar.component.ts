import { Component, OnInit } from '@angular/core';
import {LicorService} from "../services/licor.service";

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  constructor(private licorService: LicorService) { }

  ngOnInit(): void {
    this.licorService.getProducts().subscribe((data)=>{
      console.log(data)
    })
  }

}
