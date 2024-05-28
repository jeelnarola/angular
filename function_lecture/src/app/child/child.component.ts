import { Component, Input, OnChanges, OnInit  , SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges {

  @Input() myValue:any=''
  constructor(){
    console.log("constructor called.")  
  }
  ngOnChanges(changes: SimpleChanges):void {
    console.log("ngOnChanges called.");
  }
  ngOnInit(): void {
    console.log("ngOnInit called.") 
  }
  ngDoCheck(): void {
    console.log("ngDoCheck called.");
    
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called.");
    
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called.");
    
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called.");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called.");
    
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("ngOnDestroy called.");
    
  }
}
