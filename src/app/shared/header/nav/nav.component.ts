import { Component, OnInit, VERSION, Input } from '@angular/core';
import { MessengerService } from '../../../services/messenger.service';
import { CartService } from '../../../services/cart.service';
import { Product } from '../../../models/product';
import { CartItem } from '../../../models/cart-item';
import { WishlistService } from '../../../services/wishlist.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  cartItems=[];
 cartTotal= 0;
 
  collapsed = true;
  title = 'Angular' + VERSION.major;
  @Input() imgPath:string = "/assets/nav/";
  logo:string = "logo.png";
  

  constructor(private msg:MessengerService,private cartService: CartService, private wishlistService:WishlistService) { }

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
      this.cartService.SimpleGetCartItem().subscribe(
        (items:CartItem[]) =>{
        this.cartItems = items
        this.calcCartTotalItems()
      }
      )
    }

    calcCartTotalItems(){
      this.cartTotal = 0
      for(let item of this.cartItems ){
        this.cartTotal ++  //= (item.qty * item.price)
       }
    }

    
}
