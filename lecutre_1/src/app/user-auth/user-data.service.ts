import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  user(){
   return[
    {name:"jeel"},
    {name:"narola"},
    {name:"jeet"}
   ]
  }
}
