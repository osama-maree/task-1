import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'firstName',
    'secondName',
    'finalName',
    'Age',
    'update',
    'delete',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  updateRow(row: any): void {
    console.log('Update row:', row);
  }

  deleteRow(row: any): void {
    console.log('Delete row:', row);
  }
}

export interface PeriodicElement {
  firstName: string;
  secondName: string;
  finalName: string;
  Age: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { firstName: 'osama', secondName: 'Hydrogen', finalName: 'maree', Age: 22 },
  { firstName: 'osama', secondName: 'Hydrogen', finalName: 'maree', Age: 22 },
  { firstName: 'osama', secondName: 'Hydrogen', finalName: 'maree', Age: 22 },
  { firstName: 'osama', secondName: 'Hydrogen', finalName: 'maree', Age: 22 },
  { firstName: 'osama', secondName: 'Hydrogen', finalName: 'maree', Age: 22 },
  { firstName: 'osama', secondName: 'Hydrogen', finalName: 'maree', Age: 22 },
  { firstName: 'osama', secondName: 'Hydrogen', finalName: 'maree', Age: 22 },
  { firstName: 'osama', secondName: 'Hydrogen', finalName: 'maree', Age: 22 },
  { firstName: 'osama', secondName: 'Hydrogen', finalName: 'maree', Age: 22 },
  { firstName: 'osama', secondName: 'Hydrogen', finalName: 'maree', Age: 22 },
  { firstName: 'osama', secondName: 'Hydrogen', finalName: 'maree', Age: 22 },
  { firstName: 'osama', secondName: 'Hydrogen', finalName: 'maree', Age: 22 },
  { firstName: 'osama', secondName: 'Hydrogen', finalName: 'maree', Age: 22 },
  { firstName: 'osama', secondName: 'Hydrogen', finalName: 'maree', Age: 22 },
  { firstName: 'osama', secondName: 'Hydrogen', finalName: 'maree', Age: 22 },
  { firstName: 'osama', secondName: 'Hydrogen', finalName: 'maree', Age: 22 },
  { firstName: 'osama', secondName: 'Hydrogen', finalName: 'maree', Age: 22 },
  { firstName: 'osama', secondName: 'Hydrogen', finalName: 'maree', Age: 22 },
  { firstName: 'osama', secondName: 'Hydrogen', finalName: 'maree', Age: 22 },
  { firstName: 'osama', secondName: 'Hydrogen', finalName: 'maree', Age: 22 },
  { firstName: 'osama', secondName: 'Hydrogen', finalName: 'maree', Age: 22 },
  { firstName: 'osama', secondName: 'Hydrogen', finalName: 'maree', Age: 22 },
  { firstName: 'osama', secondName: 'Hydrogen', finalName: 'maree', Age: 22 },
  { firstName: 'osama', secondName: 'Hydrogen', finalName: 'maree', Age: 22 },
  { firstName: 'osama', secondName: 'Hydrogen', finalName: 'maree', Age: 22 },
  { firstName: 'osama', secondName: 'Hydrogen', finalName: 'maree', Age: 22 },
  { firstName: 'osama', secondName: 'Hydrogen', finalName: 'maree', Age: 22 },
  { firstName: 'osama', secondName: 'Hydrogen', finalName: 'maree', Age: 22 },
  { firstName: 'osama', secondName: 'Hydrogen', finalName: 'maree', Age: 22 },
  { firstName: 'osama', secondName: 'Hydrogen', finalName: 'maree', Age: 22 },
  { firstName: 'osama', secondName: 'Hydrogen', finalName: 'maree', Age: 22 },
  { firstName: 'osama', secondName: 'Hydrogen', finalName: 'maree', Age: 22 },
];
