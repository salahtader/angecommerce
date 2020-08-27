import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Observable } from 'rxjs/Observable';
import { map, catchError, retry, tap } from 'rxjs/operators';
import {_throw} from 'rxjs/observable/throw';


import { HttpParams, HttpClient, HttpErrorResponse } from '@angular/common/http';

import { cartUrl } from '../config/api';
import { Product } from '../models/product';
import { MessengerService } from './messenger.service';

@Injectable()
export class CartService {
  productUrl = 'http://localhost:3000/products'

  constructor(private http: HttpClient ,private msg:MessengerService) { }

  deletAll(productId): Observable<any> {
    console.log('service deletAll');
    
    return this.http.get<any>(cartUrl).pipe(
      map((result: any[]) => {

        for (let item of result) {
          let productExist = false
         console.log(item.product.id);
         if (item.product.id === productId) {
         
          this.removeFromCart(item.product,item.id).subscribe({
            complete: () => console.log('DONE!'),
            error: error => console.error(error),

          }
            
          )
          console.log('equal');
           
         }
         else{
           console.log('no Item to delete');
           break;
                  
         }


        }

        
      })
    )
  }


  getCartItem(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((result: any[]) => {

        let cartItems: CartItem[] = [];
        for (let item of result) {
          let productExist = false

          for (let i in cartItems) {
            if (cartItems[i].productId === item.product.id) {
              cartItems[i].qty++
              productExist = true
              break;
            }
          }

          if (!productExist) {
            cartItems.push(new CartItem(item.id, item.product))

          }
        }

        return cartItems
      })
    )
  }

  SimpleGetCartItem(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(cartUrl)
  }


  addProductToCart(product: Product): Observable<any> {
    this.msg.sendMsg(product)
    this.msg.updateCount(product);
    return this.http.post(cartUrl, { product })  // return like this {id :1 , product:{}}
  }
  getOneProductByID(id: number): Observable <Product> {
    const url = `${this.productUrl}/${id}`;
    return this.http.get<any>(url)
    }

    removeFromCart(product,cartId: number): Observable<{}> {
      this.msg.sendMsg(product)
    this.msg.updateCount(product);
      return this.http.delete(cartUrl + '/' + cartId)
     
    }
}
