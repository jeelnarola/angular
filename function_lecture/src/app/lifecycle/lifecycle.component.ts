import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent  {

  value:string=""
  destoryValue:boolean=true
  
  getValue(val:any){
    this.value=val.value
  }
  getBtnValue(){
    this.destoryValue=false
  }
}
