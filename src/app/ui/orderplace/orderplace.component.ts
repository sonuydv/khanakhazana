import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AppConfig} from "../../app-config";
import {OrderItem} from "../../data/model/models";
import {DataApi} from "../../data/api/data.api";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-orderplace',
  templateUrl: './orderplace.component.html',
  styleUrls: ['./orderplace.component.scss']
})
export class OrderplaceComponent implements OnInit {

  public form: FormGroup

  orderId: number = 0

  constructor(
    private snackbar: MatSnackBar,
    private fb : FormBuilder,
    @Inject(MAT_DIALOG_DATA) private matInputData: {orderId: number},
    private matDialogRef: MatDialogRef<OrderplaceComponent>
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
    this
    DataApi.updateOrderList(AppConfig.orderList.getValue()
      .concat(new OrderItem(this.orderId, this.form.value.name)))
    this.matDialogRef.close()
    this.snackbar.open('Order Placed Successfully' , 'ok', {
      duration: 3000
    })
  }


}
