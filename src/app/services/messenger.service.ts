import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Product } from '../models/product';

@Injectable()
export class MessengerService {
 subject =new Subject
  constructor() { }

  sendMsg(product){
       this.subject.next(product)  //Triggering an event --> add to cart
  }

    // Observable number streams
  count = this.subject.asObservable();
  // Service message commands
  updateCount(count) {
    this.subject.next(count);
  }

  getMsg(){
    console.log('getMsg');
    return this.subject.asObservable()
    
    
  }

}
