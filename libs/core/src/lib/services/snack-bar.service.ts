import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { Severity } from '../enums/severity.enum';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {

  constructor(private readonly snackBar: MatSnackBar) {
  }

  // TODO Make global configuration
  open(message?: string, severity?: Severity, duration: number = 2000): void {
    this.snackBar.open(message, null, {
      duration: duration, verticalPosition: 'top',
      panelClass: this.defineSeverityStyleClass(severity),
    });
  }

  close(): void {
    this.snackBar.dismiss();
  }

  private defineSeverityStyleClass(severity: Severity): string {
    switch (severity) {
      case Severity.SUCCESS:
        return 'snack-bar-success';
      case Severity.WARN:
        return 'snack-bar-warn';
      case Severity.ERROR:
        return 'snack-bar-error';
      default:
        return 'snack-bar-info';
    }
  }

}
