import { Component, OnInit } from '@angular/core';
import {LicorService} from "../services/licor.service";
import{ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  constructor(private licorService: LicorService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((query)=>{
      if(query["licor"]){
        console.log(query["licor"])
      }

    })
    // this.licorService.getProducts().subscribe((data)=>{
    //   console.log(data)
    // })
  }

}
