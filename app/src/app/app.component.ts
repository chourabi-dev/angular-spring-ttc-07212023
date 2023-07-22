import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  
  
  title = 'app';

  username:string = "chourabi taher";

  email:any ;
  

  year:number = 2023;


  success:boolean = true;


  employees:string[] = [ 'chourabi taher', 'john wick', 'jason demo' ];


  user:any = { fullname:'chourabi taher', email:'tchourabi@gmail.com' } // JSON object

  // method


  // let's create a method that return current date

  getTodaysDate(){
    const today = new Date();
    return today.getDate();
  }


  // models

  user2:User = { nom:'test', prenom:'test 2', age: 35  };



  users:User[] = [
    { nom:'chourabi', prenom:'taher', age:35, confirmed:true },
    { nom:'chourabi', prenom:'taher', age:35, confirmed:true },
    { nom:'chourabi', prenom:'taher', age:35, confirmed:false },
    { nom:'chourabi', prenom:'taher', age:35, confirmed:false },
    { nom:'chourabi', prenom:'taher', age:35, confirmed:true },
    
  ]



  index:number= 0;

  

  gallery:string[] = [
    'https://th.bing.com/th/id/R.be01bd57d241a115f96823093c20429f?rik=UwD5p%2b94nVDcfw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-Iv10Uqz9CHI%2fUjheKgah2OI%2fAAAAAAAACIs%2feuED5J6F_Bg%2fs1600%2fcool-wallpaper-background-for-desktop.jpg&ehk=J8w5IS0pkJHAeZALlbPW0mohsXa2PWWwhUCwzOiJ7yY%3d&risl=&pid=ImgRaw&r=0',
    'https://th.bing.com/th/id/R.a1b5ab58afd9cafa336371640a0974b3?rik=YYtdKP%2b6gmNl4g&riu=http%3a%2f%2f2.bp.blogspot.com%2f-AcBBEoKJgjY%2fUWvQRuA4cpI%2fAAAAAAAAFNk%2fsmeprHSRW68%2fs1600%2fhd-wallpaper-with-clouds-reflecting-in-water-of-lake-and-fog.jpg&ehk=jKTnRK6UqDFbB%2fw1bMcLlgwlbwqBct8BgOC5zjClDGY%3d&risl=&pid=ImgRaw&r=0',
    'https://i.pinimg.com/originals/10/a2/6b/10a26b101642c8e66d7808829912facd.jpg'
  ]


  photoURL:string = this.gallery[this.index];

  

  next(){
    this.index++;

    this.photoURL = this.gallery[this.index];
    
  }


  prev(){
    this.index--;

    this.photoURL = this.gallery[this.index];
    
  }




}
