import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { PanierComponent } from './pages/panier/panier.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PromisePageComponent } from './pages/promise-page/promise-page.component';
import { ObservablePageComponent } from './pages/observable-page/observable-page.component';

const routes: Routes = [
  /*{ path:'', component:ProductsComponent },
  { path:'panier', component:PanierComponent },*/


  { path:'', component:ContactUsComponent },
  { path:'promise', component:PromisePageComponent },
  { path:'observable', component:ObservablePageComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
