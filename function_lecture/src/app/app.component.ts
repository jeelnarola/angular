import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'call-function';
  display:any=""
  displayClick:any=""
  getHome(val:any){
    console.log(val)
  }
  getValue(val:any){
    this.display=val
  }
  getValue2(val:any){
    this.displayClick=val
  }
 
}
