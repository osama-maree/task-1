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
  isEditing: boolean = false;
  selectedRow: Person | null = null;
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
  updateRow(row: Person): void {
    this.isEditing = true;
    this.selectedRow = row;
    console.log('Update row:', row);
  }
  saveRow(row: Person): void {
    this._indexedDbService.persons.update(row.id, row).then(
      (result) => {
        console.log('Record updated successfully', result);
      },
      (error) => {
        console.error('Error updating record', error);
      }
    );
    this.selectedRow = null;
    console.log(row);
  }

  deleteRow(row: Person): void {
    this._indexedDbService.persons.delete(row.id).then(
      (result)=>console.log(result),
      (error)=>console.log(error)
    );
    this.dataSource.data = this.dataSource.data.filter(
      (person) => person.id != row.id
    );
  }
}
