import { CartService } from './../../service/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  total: any;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.total = this.items.reduce((a: any, b: any) => a + b.price, 0);
    console.log(this.total);
  }

  onSubmitPayment(): any {
    window.alert('Success');
  }
}
