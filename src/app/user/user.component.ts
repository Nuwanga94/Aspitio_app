import { Component, OnInit } from '@angular/core';
import { SendService } from '../services/send.service'
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private senddata:SendService) { }

  ngOnInit() {
  }


  onSubmit(formData : NgForm){
    console.log(formData.value);

    this.senddata.sendData(formData).subscribe(res=>{ //subscribe-ewana response eka alla gannawa
      console.log(res)
    },
    err=>{
      alert("wrong")
    });
  }
}