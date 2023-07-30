import { Component } from '@angular/core';
import { UserItem } from 'src/app/models/users';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {


  users:UserItem[] = [
    { id: 1, fullname:"John wick" },
    { id: 2, fullname:"Jason wick" },
    { id: 3, fullname:"Demo wick" },
    
  ]

}
