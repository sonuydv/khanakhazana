import {BehaviorSubject} from "rxjs";
import {OrderItem} from "./data/model/models";

export class AppConfig {

   static ORDER_DETAILS = 'orderDetail'

   static orderList: BehaviorSubject<Array<OrderItem>> = new BehaviorSubject<Array<OrderItem>>([])


   static  saveOrderDetails(orderList: Array<OrderItem>){
    localStorage.setItem(this.ORDER_DETAILS, JSON.stringify(orderList))
  }

   static getOrderList(): OrderItem[]{
    return JSON.parse(localStorage.getItem(this.ORDER_DETAILS)!)
  }


}
