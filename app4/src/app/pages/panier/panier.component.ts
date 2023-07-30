import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { PanierService } from 'src/app/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  products:Product[] = [];

  constructor( private panier:PanierService ){}
  ngOnInit(): void {
    this.products = this.panier.list;
  }
}
