import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  today:Date = new Date();




  formtDate(date:Date){
    return date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear();
  }
}
