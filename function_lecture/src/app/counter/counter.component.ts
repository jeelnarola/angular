import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count=0;
  counter(type:string){ 
    if(type==="add"){
      this.count++;
    }else{
      this.count--;
      if(this.count<0){
        this.count=0
      }
    }
  }
}
