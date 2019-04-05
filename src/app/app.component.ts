import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name: string = "Like";
  public res: boolean = false;
  title = 'app';

  clickMe(){
    if(this.name == "UnLike"){
      this.name = "Like"
      this.res = false;
    }else{
      this.name = "UnLike"
      this.res = true;
    }
  }
}