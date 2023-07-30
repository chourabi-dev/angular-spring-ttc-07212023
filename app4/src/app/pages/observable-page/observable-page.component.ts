import { Component } from '@angular/core';
import {Observable } from 'rxjs';


@Component({
  selector: 'app-observable-page',
  templateUrl: './observable-page.component.html',
  styleUrls: ['./observable-page.component.css']
})
export class ObservablePageComponent {




  startTheWatch(){
    this.watchMyPosition().subscribe( (data)=>{ 
      console.log(data);
      
     },(error)=>{
      console.log(error);
      
     } )
  }

  watchMyPosition(){
    const obersvalble = new Observable(  (watcher)=>{

      navigator.geolocation.watchPosition((postion)=>{
        watcher.next(postion)
      },(error)=>{
        watcher.error(error);
      })

    })


    return obersvalble;
  }


}
