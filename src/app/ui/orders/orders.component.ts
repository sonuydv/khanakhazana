import { Component, OnInit } from '@angular/core';
import {AppConfig} from "../../app-config";
import {FoodItem, OrderItem} from "../../data/model/models";
import {DataApi} from "../../data/api/data.api";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orderList: Array<OrderItem> = []

  foodList : Array<FoodItem> = []

  constructor() {
    this.foodList = DataApi.fetchFoodItemList()
  }


  ngOnInit(): void {
    AppConfig.orderList.subscribe(orderList => {
      this.orderList = orderList
    })
  }


  cancelOrder(orderId: number){
    DataApi.updateOrderList(this.orderList.filter(value=>{
      return value.orderId != orderId
    }))
  }

}
