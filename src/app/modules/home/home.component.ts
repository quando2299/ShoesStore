import { Component, OnInit } from '@angular/core';
import { Client } from 'src/service-proxy/temp/client-service-proxy';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: any;

  constructor(
    private clientServiceProxy: Client.Client
  ) { }

  ngOnInit(): void {
    this.clientServiceProxy.home(10).subscribe(res => {
      this.products = res;
    });
  }

}
