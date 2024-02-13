import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(
    message: string,
    action: string = 'Close',
    config?: MatSnackBarConfig
  ): void {
    this._snackBar.open(message, action, config);
  }
}
