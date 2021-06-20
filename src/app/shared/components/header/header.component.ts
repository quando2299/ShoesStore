import { Component, OnInit } from '@angular/core';
import { Client } from 'src/service-proxy/temp/client-service-proxy';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  dataHeader: any;

  constructor(
    private clientServiceProxy: Client.Client
  ) { }

  ngOnInit(): void {
    this.clientServiceProxy.branches().subscribe(res => {
      this.dataHeader = res;
    })
  }

}
