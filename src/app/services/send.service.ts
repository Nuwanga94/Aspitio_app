import { Injectable } from '@angular/core';

import{NgForm} from '@angular/forms';
import{HttpClient} from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class SendService {

  constructor(private http:HttpClient) { }





  sendData(formData:NgForm){
    return this   
              .http
              .post('http://dev.aspitio.com:82/api/note',
              {
                "userId":formData.value.userId,
                "noteDate":formData.value.noteDate,
                "noteTopic":formData.value.noteTopic,
                "note":formData.value.note
              });
  }
}