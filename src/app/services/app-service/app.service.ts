import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  
  toggle(isToggled: boolean) {
    isToggled = !isToggled;
    console.log(isToggled)
  }
}
