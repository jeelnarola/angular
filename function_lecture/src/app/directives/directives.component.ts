import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  getif:boolean=false;
  color:string=""
  getClick(){
    alert('clicked');
  }
  users=[
      {name:"jeel"},
      {name:"jeet"},
      {name:"meet"}
  ]
  getChengeColor(val:string){
    this.color=val
  }
  addStyle(){
    return{
      'color':'white',
       'background-color':'red',
      'font-size':'40px',
      'padding':'10px'
    }
  }
  
}
