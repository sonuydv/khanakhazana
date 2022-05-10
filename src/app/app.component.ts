import {AfterViewInit, Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {FoodItem, OrderItem} from "./data/model/models";
import {AppConfig} from "./app-config";
import {DataApi} from "./data/api/data.api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'khana khazana';


  orderList : OrderItem[] = []

  constructor(
    private matDialog: MatDialog,
    private router: Router
  ) {
    AppConfig.orderList.subscribe(orderList => {
      this.orderList = orderList
    })

    AppConfig.orderList.next(DataApi.fetchOrderList())

  }

  ngAfterViewInit(): void {
    this.router.navigateByUrl('/home')
  }

}



