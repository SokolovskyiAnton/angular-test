import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
} from "@angular/material/snack-bar";
import {NotifyDto} from "./dto/notify.dto";

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private matSnackbar: MatSnackBar) {}
  notifyDefaultConfig: NotifyDto = {
    verticalPosition: "top",
    horizontalPosition: "right",
    duration: 5000
  }
  showNotify(
    message: string,
    action: string = '',
    config: MatSnackBarConfig = this.notifyDefaultConfig
  ) {
    this.matSnackbar.open(message, action, config)
  }
}
