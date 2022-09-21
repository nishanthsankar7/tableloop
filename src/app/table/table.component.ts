import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from '../model/employee';
import { EmpFilter, filterOption } from '../model/empfilter';
import { MatSelectChange } from '@angular/material/select';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {

  loopSize = [1,2,3,4,5];

  displayedColumns: string[] = [
    'id',
    'firstname',
    'lastname',
    'email',
    'gender',
    'jobtitle',
    'department',
    'weight',
    'gold weight',
  ];

  

  EmpData: Employee[] = [
    {
      id: 1,
      firstname: 'Mellie',
      lastname: 'Gabbott',
      email: 'mgabbott0@indiatimes.com',
      gender: 'Female',
      department: 'Support',
      jobtitle: 'Support Analyst',
      weight: 123,
      gold_weight: 42,
    },
    
  ];

  dataSource= new MatTableDataSource();


  constructor() {}

  ngAfterViewInit() {}

  ngOnInit(): void {}
  
  addRow() {
    const newRow = {
      "id": 1,
      "firstname": 'Mellie',
      "lastname": 'Gabbott',
      "email": 'mgabbott0@indiatimes.com',
      "gender": 'Female',
      "department": 'Support',
      "jobtitle": 'Support Analyst',
      "weight": 123,
      "gold_weight": 42, }
    // this.dataSource = [{...this.dataSource, newRow}];
  }
}
