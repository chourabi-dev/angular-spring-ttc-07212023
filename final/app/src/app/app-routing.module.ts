import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { UpdatePageComponent } from './pages/update-page/update-page.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'home', component:HomePageComponent },
  { path:'add', component:AddPageComponent },
  { path:'update/:id', component:UpdatePageComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
