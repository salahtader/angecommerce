import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessengerService } from '../../../../services/messenger.service';
import { CartService } from '../../../../services/cart.service';
import { Product } from '../../../../models/product';
import { WishlistService } from '../../../../services/wishlist.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  @Input() addedToWishlist : boolean =false
  @Input() productItem: Product
  ViewButton:boolean=false
  constructor(private route:ActivatedRoute, private msg:MessengerService, private cartService:CartService,private wishlistService:WishlistService) {
   
      

      
      
        this.getProduct(this.route.snapshot.paramMap.get('id'))
        this.ViewButton=false
    
  }

  ngOnInit() {
   
  }
  handelAddToCart(){
    this.cartService.addProductToCart(this.productItem).subscribe()
    this.msg.sendMsg(this.productItem)
     
  }
  getProduct(id) {
     this.cartService.getOneProductByID(id).subscribe( 
       p => {
        // console.log(p)
         this.productItem = p
      //console.log(this.productItem)
      
      
    })
   
  }

  

}
