import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MsgBoxProperties } from '../classes';
import { MsgBoxButtons, MsgBoxIcons, MsgBoxResult } from '../enums';

@Component({
  selector: 'msgbox',
  templateUrl: './msgbox.component.html',
  styleUrls: ['./msgbox.component.css']
})
export class MsgboxComponent {

  // new instance
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: MsgBoxProperties, 
    private dialogRef: MatDialogRef<MsgboxComponent>
  ) { }

  //#region is info / question / warning / error

    // is info
    get isInfo(): boolean {
      return this.data.Icon == MsgBoxIcons.Info;
    }

    // is question
    get isQuestion(): boolean {
      return this.data.Icon == MsgBoxIcons.Question;
    }

    // is warning
    get isWarn(): boolean {
      return this.data.Icon == MsgBoxIcons.Warning;
    }

    // is error
    get isError(): boolean {
      return this.data.Icon == MsgBoxIcons.Error;
    }

  //#endregion

  //#region Button-Results

    // Button-1-Result
    get button1Result(): MsgBoxResult {
      switch (this.data.Buttons) {
        case MsgBoxButtons.OK: return MsgBoxResult.OK;
        case MsgBoxButtons.OKCancel: return MsgBoxResult.OK;
        case MsgBoxButtons.RetryCancel: return MsgBoxResult.Retry;
        case MsgBoxButtons.YesNo: return MsgBoxResult.Yes;
        case MsgBoxButtons.YesNoCancel: return MsgBoxResult.Yes;
        default: return MsgBoxResult.Button1;
      }
    }

    // Button-2-Result
    get button2Result(): MsgBoxResult {
      switch (this.data.Buttons) {
        case MsgBoxButtons.OK: return MsgBoxResult.Button2;
        case MsgBoxButtons.OKCancel: return MsgBoxResult.Cancel;
        case MsgBoxButtons.RetryCancel: return MsgBoxResult.Cancel;
        case MsgBoxButtons.YesNo: return MsgBoxResult.No;
        case MsgBoxButtons.YesNoCancel: return MsgBoxResult.No;
        default: return MsgBoxResult.Button2;
      }
    }

    // Button-3-Result
    get button3Result(): MsgBoxResult {
      switch (this.data.Buttons) {
        case MsgBoxButtons.OK: return MsgBoxResult.Button3;
        case MsgBoxButtons.OKCancel: return MsgBoxResult.Button3;
        case MsgBoxButtons.RetryCancel: return MsgBoxResult.Button3;
        case MsgBoxButtons.YesNo: return MsgBoxResult.Button3;
        case MsgBoxButtons.YesNoCancel: return MsgBoxResult.Cancel;
        default: return MsgBoxResult.Button3;
      }
    }

  //#endregion

  //#region Button-Texts

    // Button-1-Text
    get button1Text(): string {
      switch (this.data.Buttons) {
        case MsgBoxButtons.OK: return "OK";
        case MsgBoxButtons.OKCancel: return "OK";
        case MsgBoxButtons.RetryCancel: return "Retry";
        case MsgBoxButtons.YesNo: return "Ja";
        case MsgBoxButtons.YesNoCancel: return "Ja";
        default: {
          if (this.data.Button1Text) return this.data.Button1Text;
          else return "";
        }
      }
    }

    // Button-2-Text
    get button2Text(): string {
      switch (this.data.Buttons) {
        case MsgBoxButtons.OK: return "";
        case MsgBoxButtons.OKCancel: return "Abbrechen";
        case MsgBoxButtons.RetryCancel: return "Abbrechen";
        case MsgBoxButtons.YesNo: return "Nein";
        case MsgBoxButtons.YesNoCancel: return "Nein";
        default: {
          if (this.data.Button2Text) return this.data.Button2Text;
          else return "";
        }
      }
    }

    // Button-3-Text
    get button3Text(): string {
      switch (this.data.Buttons) {
        case MsgBoxButtons.OK: return "";
        case MsgBoxButtons.OKCancel: return "";
        case MsgBoxButtons.RetryCancel: return "";
        case MsgBoxButtons.YesNo: return "";
        case MsgBoxButtons.YesNoCancel: return "Abbrechen";
        default: {
          if (this.data.Button3Text) return this.data.Button3Text;
          else return "";
        }
      }
    }

  //#endregion

  // Message
  get message(): string {
    return this.data.Message;
  }

  // onButtonClick
  onButtonClick(result: MsgBoxResult) {
    // create event-args
    let e = {result: result, cancel: false}
    // raise event
    this.beforeDialogClose.emit(e);
    // close if not cancelled
    if (!e.cancel) this.dialogRef.close();
  }

  // event: before dialog close
  @Output() beforeDialogClose = new EventEmitter();

}