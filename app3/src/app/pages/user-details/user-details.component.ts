import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id?:string;
  // we need to get the id from the URL !!!


  // injection de service !!!

  constructor( private route:ActivatedRoute ){}

  ngOnInit(): void {
   
      this.id = this.route.snapshot.params['id'];
    
  }

  
}
