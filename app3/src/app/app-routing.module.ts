import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';
import { ErroPageComponent } from './pages/erro-page/erro-page.component';

const routes: Routes = [
  { path:'' , redirectTo:'home', pathMatch:'full' },
   
  { path:'home' , component:HomePageComponent },
  { path:'about' , component:AboutPageComponent },
  { path:'contact-us' , component:ContactUsPageComponent },

  { path:'**' , component:ErroPageComponent },

 
  // guard

  // nested routing 

  // service !!

    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
