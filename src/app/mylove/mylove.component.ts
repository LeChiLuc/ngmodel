import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mylove',
  templateUrl: './mylove.component.html',
  styleUrls: ['./mylove.component.css']
})
export class MyloveComponent implements OnInit {
  @Input()
  name: string;
  @Input()
  respons: any;
  constructor() { }

  ngOnInit() {
  }

 
}
