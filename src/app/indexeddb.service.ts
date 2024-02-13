import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { Person } from './person';
@Injectable({
  providedIn: 'root',
})
export class IndexedDbService extends Dexie {
  persons: Dexie.Table<Person, number>;
  constructor() {
    super('database');
    this.version(1).stores({
      persons: '++id,firstName,secondName,finalName,age',
    });
    this.persons = this.table('persons');
  }
}
