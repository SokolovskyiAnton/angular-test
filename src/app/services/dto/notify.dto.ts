import {MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";

export interface NotifyDto {
  verticalPosition: MatSnackBarVerticalPosition;
  horizontalPosition: MatSnackBarHorizontalPosition;
  duration: number;
}
