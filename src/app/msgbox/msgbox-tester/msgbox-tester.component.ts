import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { EnumItem, MsgBoxProperties } from '../classes';
import { MsgBoxButtons, MsgBoxIcons, MsgBoxResult } from '../enums';
import { MsgboxComponent } from '../msgbox/msgbox.component';

@Component({
  selector: 'msgbox-tester',
  templateUrl: './msgbox-tester.component.html',
  styleUrls: ['./msgbox-tester.component.css']
})
export class MsgboxTesterComponent {

  // new instance (09.04.2021, SRM)
  constructor(private dialog: MatDialog) { 
    this.msgBoxProperties = new MsgBoxProperties();
    this.msgBoxProperties.Title = "Test-Message";
    this.msgBoxProperties.Message = "This is a test-message to demonstrate the msgbox." 
      + "\n" + "\n" 
      + "It should have multiple lines, so the msgbox will appear bigger."
      + "\n" + "\n" 
      + "You can even add another line, so it will be really big"
      + "\n" + "or one last one. How does that look?";
    this.msgBoxProperties.Icon = MsgBoxIcons.Question;  
    this.msgBoxProperties.Button1Text = "Good";
    this.msgBoxProperties.Button2Text = "Okay";
    this.msgBoxProperties.Button3Text = "Bad";
    this.msgBoxProperties.Buttons = MsgBoxButtons.Userdefined;
  }

  // msg-box-properties
  msgBoxProperties: MsgBoxProperties;

  // errors
  errors: string[] = [];

  // show userdefined buttons
  get showUserdefinedButtons(): boolean {
    return this.msgBoxProperties.Buttons == MsgBoxButtons.Userdefined;
  }

  // icon-list
  private _iconList?: EnumItem[]
  get iconList(): EnumItem[] {
    if (this._iconList) return this._iconList;
    
    let list = this.getIconList();
    this._iconList = list;
    return list;
  }

  // button-list
  private _buttonList?: EnumItem[]
  get buttonList(): EnumItem[] {
    if (this._buttonList) return this._buttonList;
    
    let list = this.getButtonList();
    this._buttonList = list;
    return list;
  }

  // show msg-box
  showMsgBox() {
    this.resultText = "";

    const dialogRef = this.dialog.open(MsgboxComponent, {
      data: this.msgBoxProperties
    });

    dialogRef.componentInstance.beforeDialogClose.subscribe(e => {
      let result = e.result as MsgBoxResult;
      this.resultText = MsgBoxResult[result];
    })
  }

  // result-text
  resultText = "";

  // get icon-list
  getIconList(): EnumItem[] {
    let list: EnumItem[] = [];
    for (let icon in MsgBoxIcons) {
      if (!isNaN(Number(icon))) {
          let item = new EnumItem();
          item.id = Number(icon);
          item.caption = MsgBoxIcons[icon];
          item.value = icon;
          list.push(item);
      }
    }
    return list;
  }

  // get button-list
  getButtonList(): EnumItem[] {
    let list: EnumItem[] = [];
    for (let icon in MsgBoxButtons) {
      if (!isNaN(Number(icon))) {
          let item = new EnumItem();
          item.id = Number(icon);
          item.caption = MsgBoxButtons[icon];
          item.value = icon;
          list.push(item);
      }
    }
    return list;
  }

}