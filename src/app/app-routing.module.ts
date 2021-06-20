import { AboutUsComponent } from './modules/about-us/about-us.component';
import { DetailProductComponent } from './modules/detail-product/detail-product.component';
import { ProductsComponent } from './modules/products/products.component';
import { HomeComponent } from './modules/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { CartComponent } from './modules/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [{
      path: '',
      component: HomeComponent
    },
    {
      path: 'products/:id',
      component: ProductsComponent
    },
    {
      path: 'detail-product/:id',
      component: DetailProductComponent
    },

    {
      path: 'cart',
      component: CartComponent
    }, {
      path: 'about-us',
      component: AboutUsComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
