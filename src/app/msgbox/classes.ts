import { MsgBoxButtons, MsgBoxIcons } from './enums';

// msg-box-properties
export class MsgBoxProperties {
  Title = '';
  Message = '';
  Icon = MsgBoxIcons.Info;
  Buttons = MsgBoxButtons.OK;
  Button1Text?: string;
  Button2Text?: string;
  Button3Text?: string;
  CheckBoxText?: string;
  CheckBoxValue?: boolean;
}

// enum-item
export class EnumItem {
  id = 0;
  caption = '';
  value: any;
}
