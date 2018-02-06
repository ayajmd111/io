import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-com-a',
  templateUrl: './com-a.component.html',
  styleUrls: ['./com-a.component.css']
})
export class ComAComponent implements OnInit {
  hiii={
    name:"welcome",
    location:"hyderabad"
  }
  getingfromchild(e){
    this.hiii = e;
 }

  constructor() { }

  ngOnInit() {
  }

}
