import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  displaySearch = false
  searchLicor = ""
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  searchData(){
    console.log("dio clic")
    this.router.navigate(['comprar'], {queryParams:{licor:this.searchLicor}}).then();
  }

}
