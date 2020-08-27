import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product';
import { WishlistService } from '../../../services/wishlist.service';

@Component({
  selector: 'app-section-i',
  templateUrl: './section-i.component.html',
  styleUrls: ['./section-i.component.css']
})
export class SectionIComponent implements OnInit {
  
  productList: Product[]=[]
  wishlist: number[]=[]
  constructor( private productService : ProductService , private wishlistService:WishlistService) {}

  ngOnInit() {
    this.loadProducts()
   this.loadWishlist()

  }
  loadProducts(){
    this.productService.getProducts().subscribe(
      (product)=>{
      this.productList = product
    })
  }


  loadWishlist(){
    this.wishlistService.getWishlist().subscribe(productIds => {
      console.log(productIds)
      this.wishlist = productIds
    })
  }

}
