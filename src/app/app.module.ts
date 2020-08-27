import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material/material.module';
import { NavComponent } from './shared/header/nav/nav.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { appRoutingModule } from './modules/app-routing/app-routing.module';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SliderComponent } from './shared/home/slider/slider.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomeComponent } from './shared/home/home.component';
import { SectionIComponent } from './shared/home/section-i/section-i.component';
import { SectionIiComponent } from './shared/home/section-ii/section-ii.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { WishlistService } from './services/wishlist.service';
import { CartService } from './services/cart.service';
import { MessengerService } from './services/messenger.service';
import { ProductViewComponent } from './components/shopping-cart/product-list/product-view/product-view.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    NotfoundComponent,
    LoginComponent,
    RegisterComponent,
    ShoppingCartComponent,
    SliderComponent,
    HomeComponent,
    SectionIComponent,
    SectionIiComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    ProductViewComponent,
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    MaterialModule,
    AngularFontAwesomeModule,
    HttpClientModule,
  ],
  providers: [ProductService,WishlistService,CartService,MessengerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
