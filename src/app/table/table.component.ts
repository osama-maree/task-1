import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IndexedDbService } from '../indexeddb.service';
import { Person } from '../person';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements AfterViewInit, OnInit {
  dataSource = new MatTableDataSource<Person>([]);

  constructor(private _indexedDbService: IndexedDbService) {}
  ngOnInit(): void {
    this._indexedDbService.persons.toArray().then((persons) => {
      this.dataSource.data = persons;
    });
  }

  displayedColumns: string[] = [
    'firstName',
    'secondName',
    'finalName',
    'age',
    'update',
    'delete',
  ];

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
