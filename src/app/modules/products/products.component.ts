import { Component, OnInit } from '@angular/core';
import {Client } from '../../../service-proxy/temp/client-service-proxy'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  data: any;

  constructor(
    private clients: Client.Client
  ) { }

  ngOnInit(): void {
    this.clients.productsAll(1).subscribe(res => {
      console.log(res);
    });
  }

}
