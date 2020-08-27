import { Component, OnInit } from '@angular/core';
import { MessengerService } from '../../services/messenger.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';
import { CartItem } from '../../models/cart-item';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems=[];
  cartTotal= 0;
   constructor(private msg:MessengerService,private cartService: CartService) { }
 
   ngOnInit() {
     this.handleSubscription()
     this.loadCartItems()
   }
   handleSubscription(){
     this.msg.getMsg().subscribe((product : Product)=>{
       this.loadCartItems(); 
     }) 
     }
   
   loadCartItems(){
     this.cartService.getCartItem().subscribe(
       (items:CartItem[]) =>{
       this.cartItems = items
       this.calcCartTotal()
     }
     )
   }
    
   deletAll(pId){
     this.cartService.deletAll(pId).subscribe()
    //console.log(pId);
    
   }
 
   
   calcCartTotal(){
     this.cartTotal = 0
     for(let item of this.cartItems ){
       this.cartTotal += (item.qty * item.price)
     }
   }

}
