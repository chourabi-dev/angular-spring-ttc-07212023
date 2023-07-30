import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';
import { ErroPageComponent } from './pages/erro-page/erro-page.component';
import { TeamComponent } from './pages/team/team.component';
import { CompanyComponent } from './pages/company/company.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  { path:'' , redirectTo:'home', pathMatch:'full' },
   
  { path:'home' , component:HomePageComponent },
  
  { path:'user/details/:id' , component:UserDetailsComponent },
  

  { path:'about' , component:AboutPageComponent , children:[ 
    { path:'team' , component:TeamComponent },
    { path:'company' , component:CompanyComponent },
    
   ],
  
   canActivate:[authGuard]

  },

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
