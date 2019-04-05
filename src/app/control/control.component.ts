import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  public name: string = "Like";
  constructor() { }

  ngOnInit() {
  }
  clickMe(e){
    if(e.target.innerText == "Like"){
      this.name = "Unlike"
    }else{
      this.name = "Like"
    }
  }
}
