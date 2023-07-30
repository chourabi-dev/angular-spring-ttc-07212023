import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise-page',
  templateUrl: './promise-page.component.html',
  styleUrls: ['./promise-page.component.css']
})
export class PromisePageComponent implements OnInit {
 
 
  ngOnInit(): void {
    

    this.callDatabase().then( (data)=>{
      console.log(data);
      
    } ).catch( (error)=>{
      console.log(error);
      
    } )

  }




  callDatabase(){
    const promise = new Promise((   success, failure   )=>{

      setTimeout(()=>{
        failure( { success:false } );
      },3000)      

    });



    return promise;
  }



}
