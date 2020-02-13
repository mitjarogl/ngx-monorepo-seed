import {Component, OnInit, ChangeDetectionStrategy, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'nx-ui-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmationDialogComponent implements OnInit {

  data: { title: string, text: string };

  constructor(@Inject(MAT_DIALOG_DATA) private dialogData: { title: string, text: string }) {
  }

  ngOnInit() {
    this.data = this.dialogData;
  }

}
