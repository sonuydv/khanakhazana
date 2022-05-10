import {FoodItem, OrderItem} from "../model/models";
import {AppConfig} from "../../app-config";

export class DataApi {
  static fetchFoodItemList(): Array<FoodItem> {
    let foodItemList =  new Array<FoodItem>()
    foodItemList.push(new FoodItem('Pasta',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, atque.',
      150, 'assets/images/pasta.jpg' ))

    foodItemList.push(new FoodItem('Pizza',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, atque.',
      190, 'assets/images/pizza.jpg' ))

    foodItemList.push(new FoodItem('Cake',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, atque.',
      280, 'assets/images/cake.jpg' ))

    foodItemList.push(new FoodItem('Oreo shake',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, atque.',
      180, 'assets/images/shake.jpg' ))

    return foodItemList

  }

  // static saveOrderList(orderList: OrderItem[]){
  //   AppConfig.saveOrderDetails(orderList)
  // }

  static fetchOrderList(): OrderItem[]{
    return AppConfig.getOrderList()
  }


  static updateOrderList(orderList: OrderItem[]){
    AppConfig.orderList.next(orderList)
    AppConfig.saveOrderDetails(orderList)
  }

}
