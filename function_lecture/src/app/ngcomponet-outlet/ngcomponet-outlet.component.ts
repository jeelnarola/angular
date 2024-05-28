import { Component } from '@angular/core';

@Component({
  selector: 'app-ngcomponet-outlet',
  templateUrl: './ngcomponet-outlet.component.html',
  styleUrls: ['./ngcomponet-outlet.component.css']
})
export class NgcomponetOutletComponent {
  delemsg:string="delete"
  upmsg:string="update"
  compontes:any[]=[this.delemsg,this.upmsg]
  currentComponent=null;

  btn(val:number){
    const index = Math.round(Math.random());
    this.currentComponent = this.compontes[val];
    console.log(this.currentComponent);
    
  }
}
