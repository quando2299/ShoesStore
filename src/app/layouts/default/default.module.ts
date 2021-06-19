import { AboutUsComponent } from './../../modules/about-us/about-us.component';
import { SharedModule } from './../../shared/shared.module';
import { FooterComponent } from './../../shared/components/footer/footer.component';
import { HeaderComponent } from './../../shared/components/header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartComponent } from './../../modules/cart/cart.component';
import { DetailProductComponent } from './../../modules/detail-product/detail-product.component';
import { ProductsComponent } from './../../modules/products/products.component';
import { HomeComponent } from './../../modules/home/home.component';
import { DefaultComponent } from './default.component';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { Client } from 'src/service-proxy/temp/client-service-proxy';


export function getRemoteShoesServiceBaseUrl(): string {
  return 'http://localhost:5000';
}

@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    ProductsComponent,
    DetailProductComponent,
    CartComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    SwiperModule
  ],
  providers: [
    Client.Client,
    { provide: Client.API_BASE_URL, useFactory: getRemoteShoesServiceBaseUrl }
  ]
})
export class DefaultModule { }
