import { Component, OnInit } from '@angular/core';
import { Employee } from './emp';

@Component({
  selector: 'hex-tbl',
  templateUrl: './tbl.component.html',
  styleUrls: ['./tbl.component.css']
})
export class TblComponent  {

  
  id: number;
  name: string;
  address: string;
  gender: string;
  company: string;
//emp: Employee[] = [];

employees: Employee[] = [
    {
        id: 1,
        name: 'Ram',
        address: 'Kupondole',
        gender: 'Male',
        company: 'XYZ Techno Sales'
    },
    {
        id: 2,
        name: 'Shyam',
        address: 'Baneshwor',
        gender: 'Male',
        company: 'ABC Enterprises'
    },
    {
        id: 3,
        name: 'Prashansha',
        address: 'Tripureshwor',
        gender: 'Female',
        company: 'MNO Inc'
    },
    {
        id: 4,
        name: 'Rita',
        address: 'Ghatthaghar',
        gender: 'Female',
        company: 'Subisu'
    }
];

addRow() {
    //prompt("Checking the control!");
    this.employees.push({
        id: this.id,
        name: this.name,
        address: this.address,
        gender: this.gender,
        company: this.company
    });
}

deleteEmployee(index: number) {

    this.employees.splice(index, 1);
}

editEmployee(index :Employee) {

    //code for editing

}

}
