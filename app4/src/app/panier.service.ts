import { Injectable } from '@angular/core';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  list:Product[]  =[];

  
  constructor() { }


  add(produit:Product){
    this.list.push(produit);
  }
}
