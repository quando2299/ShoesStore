import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartComponent } from './../../modules/cart/cart.component';
import { DetailProductComponent } from './../../modules/detail-product/detail-product.component';
import { ProductsComponent } from './../../modules/products/products.component';
import { HomeComponent } from './../../modules/home/home.component';
import { DefaultComponent } from './default.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    ProductsComponent,
    DetailProductComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class DefaultModule { }
