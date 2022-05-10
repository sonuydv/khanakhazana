import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {AppConfig} from "../../app-config";
import {OrderItem} from "../../data/model/models";
import {DataApi} from "../../data/api/data.api";

@Component({
  selector: 'app-orderplace',
  templateUrl: './orderplace.component.html',
  styleUrls: ['./orderplace.component.scss']
})
export class OrderplaceComponent implements OnInit {

  public form: FormGroup

  orderId: number = 0

  constructor(
    private fb : FormBuilder,
    @Inject(MAT_DIALOG_DATA) private matInputData: {orderId: number}
  ) {

    this.orderId = matInputData.orderId

    this.form = this.fb.group({
      name: ['', Validators.required],
      contact: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
      email: [ '', [Validators.email]],
    });
  }

  ngOnInit(): void {
  }

  public orderPlace(){
    DataApi.updateOrderList(AppConfig.orderList.getValue()
      .concat(new OrderItem(this.orderId, this.form.value.name)))
  }


}
