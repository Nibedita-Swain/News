import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

   id:any;
  constructor(private activateRout:ActivatedRoute) { }

  ngOnInit(): void {
    let iid=this.activateRout.snapshot.paramMap.get('iid');
    this.id=iid;
  }

}
