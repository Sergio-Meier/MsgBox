import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MsgboxComponent } from './msgbox/msgbox/msgbox.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { MsgboxTesterComponent } from './msgbox/msgbox-tester/msgbox-tester.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MsgboxComponent,
    MsgboxTesterComponent
  ],
  imports: [
    BrowserModule, FormsModule, 
    BrowserAnimationsModule, 
    MatDialogModule, MatInputModule, MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
