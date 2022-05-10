import { Component, OnInit } from '@angular/core';
import {OrderplaceComponent} from "../orderplace/orderplace.component";
import {MatDialog} from "@angular/material/dialog";
import {FoodItem} from "../../data/model/models";
import {DataApi} from "../../data/api/data.api";

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.scss']
})
export class FoodMenuComponent implements OnInit {

  foodItemList: FoodItem[] = []

  constructor(
    private matDialog: MatDialog,

  ) {
    this.foodItemList = DataApi.fetchFoodItemList()
  }

  ngOnInit(): void {
  }

  public onOrder(index: number){
    this.matDialog.open<OrderplaceComponent>(OrderplaceComponent,
      {
        width: '55%',
        height: '55%',
        panelClass: 'mat-dialog-panel',
        data: {orderId: index}
      })
  }


}

