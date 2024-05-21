import { Component } from '@angular/core';

@Component({
  selector: 'app-true-false',
  templateUrl: './true-false.component.html',
  styleUrls: ['./true-false.component.css']
})
export class TrueFalseComponent {
  show:any;
  hideshowValue:any;
  color:any;
  constructor(){
  }
  
  selectColor(val:any){
    this.color=val
    console.log(this.color);
    
  }
  hideshow(val:boolean){
    this.hideshowValue=val
    console.log( this.hideshowValue);
}
}