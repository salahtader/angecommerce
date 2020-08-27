import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { productUrl } from '../config/api';



@Injectable()
export class ProductService {
  
  

  constructor(private http:HttpClient) { }
  
getProducts():Observable<Product[]> {
  //TODO : populate product from API , and return a Observble
  return this.http.get<Product[]>(productUrl);
}


}
