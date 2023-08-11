import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { UserModel } from 'src/app/models/user';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  users:UserModel[] = [];

  error:boolean= false;
  // errorMessage?:string;

  loading:boolean = false;



  constructor( private api:ApiService ){}
  ngOnInit(): void {
    this.getData();
  }



  getData(){
    this.error = false;
    this.loading = true;

    this.api.getUsersList().subscribe(
      
      (data:any )=>{  
         console.log(data); 

         this.users = data
         this.loading = false;


      }, 


      (error:HttpErrorResponse)=>{
        console.log(error);


        /**
         * if ( error.status === 0 ) {
          
        }

         */

        this.error = true;
        this.loading = false;
         
      })
  }

}

