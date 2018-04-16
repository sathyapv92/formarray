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
import { ValiationsComponent } from './valiations/valiations.component';

@NgModule({
  declarations: [
    AppComponent,
    TableSelectionExample,
    NumberinputDirective,
    TblComponent,
    ValiationsComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,BrowserAnimationsModule,NoopAnimationsModule,
    MatTableModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
