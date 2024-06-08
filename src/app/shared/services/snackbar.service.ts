import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor() { }
  private _matSnackbar = inject(MatSnackBar)

  opensnackbar(msg :string){
    this._matSnackbar.open(msg,"close",
      {
        duration :3000,
        horizontalPosition:'left',
        verticalPosition:'top'
      }
    )
  }
}
