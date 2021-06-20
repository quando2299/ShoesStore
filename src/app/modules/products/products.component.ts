import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../../../service-proxy/temp/client-service-proxy';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  data: any;

  constructor(
    private clients: Client.Client,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getProductsByBranch();
  }

  getProductsByBranch(): any {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.clients.productsAll(id).subscribe(res => {
      this.data = res;
    });
  }

  numberWithCommas(x: any): any {
    const parts = x.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
}
}
