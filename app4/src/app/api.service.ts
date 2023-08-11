import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient ) { }



  getUsersList()  {
    return this.http.get("https://jsonplakceholder.typicode.com/users");
  }



}
