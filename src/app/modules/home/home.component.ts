import { Component, OnInit } from '@angular/core';
import { Client } from 'src/service-proxy/temp/client-service-proxy';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  branches: any;

  constructor(
    private clientServiceProxy: Client.Client
  ) { }

  ngOnInit(): void {
    this.clientServiceProxy.branches().subscribe(res => {
      console.log(res);
    })
  }

}
