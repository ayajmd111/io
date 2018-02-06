import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit {
  @Input()  
  cobj:string;


  constructor() { 
    
    console.log(this.cobj);
    
  }

  ngOnInit() {
  }

}
