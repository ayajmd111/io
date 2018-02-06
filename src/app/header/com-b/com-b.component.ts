import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-com-b',
  templateUrl: './com-b.component.html',
  styleUrls: ['./com-b.component.css']
})
export class ComBComponent implements OnInit {
  @Input()
  hello={}
  @Output()
  changeName= new EventEmitter()
  changevalue:any;


  constructor() { }

  ngOnInit() {
  }
  sendmydata(){
    this.changevalue= { name1:"ayaj",
    name2:"hari"}
    this.changeName.emit(this.changevalue)
  }

}
