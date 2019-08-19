import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note';
import {GetService} from '../services/get.service'
import {Router} from '@angular/router'
import {Customer} from '../models/newUser'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.component.html',
  styleUrls: ['./view-note.component.css']
})
export class ViewNoteComponent implements OnInit {

  constructor(private getData: GetService,private activeRoute:ActivatedRoute, private route:Router) { }

  customer:Customer;

  ngOnInit() {
    this.getData.getData(this.activeRoute.snapshot.paramMap.get('id'))
    .subscribe((data:Customer)=>{
      this.customer=data;
    })
 }


}
