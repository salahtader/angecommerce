import {NgModule} from '@angular/core'
import {Route,RouterModule, Routes} from '@angular/router'

import { NotfoundComponent } from '../../shared/notfound/notfound.component'
import { LoginComponent } from '../../components/auth/login/login.component'
import { RegisterComponent } from '../../components/auth/register/register.component'
import { ShoppingCartComponent } from '../../components/shopping-cart/shopping-cart.component'
import { HomeComponent } from '../../shared/home/home.component'
import { ProductItemComponent } from '../../components/shopping-cart/product-list/product-item/product-item.component'
import { ProductListComponent } from '../../components/shopping-cart/product-list/product-list.component'
import { ProductViewComponent } from '../../components/shopping-cart/product-list/product-view/product-view.component'

const routes:Routes = [
    {path:'login', component :LoginComponent},
    {path:'register', component :RegisterComponent},
    {path:'shop', component :ShoppingCartComponent},
    {path:'home', component :HomeComponent},
    {path:'cart', component :ShoppingCartComponent},
    {path:'product/:id', component :ProductViewComponent},
    {path:'', redirectTo:'/home', pathMatch:'full'},
 {path:'**', component :NotfoundComponent},
     
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ],
})
export class appRoutingModule{

}