import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { PanierService } from 'src/app/panier.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  panierList:Product[] = [];

  constructor( private panier:PanierService ){}

  
  ngOnInit(): void {
    this.panierList = this.panier.list;
  }



  products:Product[] = [
    { id:1, name:"Samsung s21",price:2500 },
    { id:2, name:"HP laptoop",price:1200 },
    { id:3, name:"Sony headset",price:30 },
    
  ]



  ajouterPanier(produit:Product){ 
    this.panier.add(produit);
    
  }

}
