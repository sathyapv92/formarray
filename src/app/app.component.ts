import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  invoiceForm: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.invoiceForm = this._fb.group({
      itemRows: this._fb.array([this.initItemRows()])
    });
  }

  /*
  This creates a new formgroup. You can think of it as adding an empty object
  into an array. So we are pushing an object to the formarray 'itemrows' that
  has the property 'itemname'. 
  */
  initItemRows() {
      return this._fb.group({
          itemname: ['']
      });
  }

  addNewRow() {
      const control = <FormArray>this.invoiceForm.controls['itemRows'];
      control.push(this.initItemRows());
  }

  deleteRow(index: number) {
      const control = <FormArray>this.invoiceForm.controls['itemRows'];
      control.removeAt(index);
  }
}
