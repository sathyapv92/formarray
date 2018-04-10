import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatTableModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { TableSelectionExample } from './table-selection-example/table-selection-example.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NumberinputDirective } from './numberinput.directive';
import { TblComponent } from './tbl/tbl.component';

@NgModule({
  declarations: [
    AppComponent,
    TableSelectionExample,
    NumberinputDirective,
    TblComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,BrowserAnimationsModule,NoopAnimationsModule,
    MatTableModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
