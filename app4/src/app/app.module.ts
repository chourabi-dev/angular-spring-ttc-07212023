import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/products/products.component';
import { PanierComponent } from './pages/panier/panier.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PromisePageComponent } from './pages/promise-page/promise-page.component';
import { ObservablePageComponent } from './pages/observable-page/observable-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    PanierComponent,
    ContactUsComponent,
    PromisePageComponent,
    ObservablePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
