import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import {Customer} from '../models/newUser'
import {Note} from '../models/note'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(private http: HttpClient) { }

  userId:string;



  getData(userId:string){
    this.userId=userId;
    return this
              .http
              .get('http://dev.aspitio.com:82/api/note/user/'+this.userId);
  }

  // getOneData(id:string){
  //   this.id=id; //id variable eka global karanawa
  //   return this
  //             .http
  //             .get('http://localhost:4000/'+this.id+'/viewAdmin');
  // }
}