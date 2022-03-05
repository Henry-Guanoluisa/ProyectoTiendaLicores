import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LicorService {
  url = 'http://localhost:3600/';
  constructor(
    private _http:HttpClient
  ){  }
  // http://localhost:3600/products
  //ver informacion
  getProducts():Observable<any>{
    let headers=new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'productos',{headers:headers});
  }

  // http://localhost:3600/guardar-product
  saveProduct(product: any):Observable<any>{
    let params=JSON.stringify(product);
    let headers=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+'guardar-producto',params,{headers:headers});
  }
  // http://localhost:3600/product/4525
  getProduct(id:String):Observable<any>{
    let headers=new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'producto/'+id,{headers:headers});
  }
  //actualizar datos
  // http://localhost:3600/product/4525
  updateProduct(product: any):Observable<any>{
    let params=JSON.stringify(product);
    console.log(product._id)
    let headers=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+'producto/'+product._id,params,{headers:headers});
  }
  //eliminar un product
  // http://localhost:3600/product/4525
  deleteProduct(id:String):Observable<any>{
    let headers=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+'producto/'+id,{headers:headers});
  }

}
