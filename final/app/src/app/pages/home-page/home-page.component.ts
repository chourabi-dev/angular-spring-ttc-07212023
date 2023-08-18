import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  voitures:any[] = [];


  constructor( private api:ApiService ){}


  ngOnInit(): void {
    this.getDATA();
  }


  getDATA(){
    this.api.getVoitureList().subscribe((data:any)=>{
      console.log(data);
      
      this.voitures = data;
    },(error)=>{

    });
  }




  deleteVoiture(id:number){
    console.log(id);
    
  }
}
