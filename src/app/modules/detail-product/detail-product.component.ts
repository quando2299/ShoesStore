import { CartService } from './../../service/cart.service';
import { Client } from 'src/service-proxy/temp/client-service-proxy';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {
  detail: any;
  content: any;
  listProductFeatures: any;

  constructor(
    private clientService: Client.Client,
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.clientService.products(id).subscribe(res => {
      this.detail = res;
      this.content = res.description;
    });

    this.clientService.features(4).subscribe(res => {
      this.listProductFeatures = res;
    });
  }

  addToCart(product: any): any {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
