import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LoaderComponent} from "../ui/loader/loader.component";

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(
    private matDialog: MatDialog
  ) { }

  public show(){
    this.matDialog.open(LoaderComponent, {
      panelClass: 'loader-class'
    })
  }

  hide(){
    this.matDialog.closeAll()
  }
}
