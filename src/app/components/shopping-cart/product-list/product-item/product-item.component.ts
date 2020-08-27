import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../models/product';
import { WishlistService } from '../../../../services/wishlist.service';
import { MessengerService } from '../../../../services/messenger.service';
import { CartService } from '../../../../services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
 @Input() productItem: Product
 @Input() addedToWishlist : boolean =false
 productUrl = 'http://localhost:3000/products'
 showViewProductButton:boolean=true
  constructor(private route:ActivatedRoute, private msg:MessengerService, private cartService:CartService,private wishlistService: WishlistService, private http:HttpClient) { }

  ngOnInit() {
    //console.log(this.addedToWishlist)
    this.wishlistService.getWishlist()
   
  }

 
  handelAddToWishlist(){
    this.wishlistService.addToWishlist(this.productItem.id).subscribe(()=>{
      this.addedToWishlist = true
    })
   }
   handelRemoveToWishlist(){
     this.wishlistService.removeFromWishlist(this.productItem.id).subscribe(()=>{
       this.addedToWishlist = false
   })
 }
 handelAddToCart(){
   this.cartService.addProductToCart(this.productItem).subscribe()
   
   
 }
 
}
