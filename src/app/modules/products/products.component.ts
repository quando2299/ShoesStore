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
  p = 1;

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
}
