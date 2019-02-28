import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SortingService {

  constructor() { }

  private columnSortedSource = new Subject<ColumnSortedEvent>();

  columnSorted$ = this.columnSortedSource.asObservable();

  columnSorted(event: ColumnSortedEvent) {
    this.columnSortedSource.next(event);
  }

  sort(criteria: SortCriteria, data: any[]): any[] {
    console.log('Data:', data, '\n',
    'Column:', criteria.sortColumn, '\n',
    'Data type:', typeof data[0][criteria.sortColumn]);
    switch (typeof data[0][criteria.sortColumn]) {
      case 'string': {
        return data.sort((a, b) => {
          if (criteria.sortDirection === 'desc') {
            if (a[criteria.sortColumn].toLowerCase() > b[criteria.sortColumn].toLowerCase()) {
              return -1;
            } else if (a[criteria.sortColumn].toLowerCase() < b[criteria.sortColumn].toLowerCase()) {
              return 1;
            } else {
              return 0;
            }
          } else {
            if (a[criteria.sortColumn].toLowerCase() > b[criteria.sortColumn].toLowerCase()) {
              return 1;
            } else if (a[criteria.sortColumn].toLowerCase() < b[criteria.sortColumn].toLowerCase()) {
              return -1;
            } else {
              return 0;
            }
          }
        });
      }
      case 'boolean': {
        return data.sort((a, b) => {
          if (criteria.sortDirection === 'desc') {
            if (a[criteria.sortColumn] === true && b[criteria.sortColumn] === false) {
              return -1;
            }
            if (a[criteria.sortColumn] === false && b[criteria.sortColumn] === true) {
              return 1;
            } else {
              return 0;
            }
          } else {
            if (a[criteria.sortColumn] === true && b[criteria.sortColumn] === false) {
              return 1;
            }
            if (a[criteria.sortColumn] === false && b[criteria.sortColumn] === true) {
              return -1;
            } else {
              return 0;
            }
          }
        });
      }
      default: {
        return data.sort((a, b) => {
          if (criteria.sortDirection === 'desc') {
            if (a[criteria.sortColumn] > b[criteria.sortColumn]) {
              return -1;
            } else if (a[criteria.sortColumn] < b[criteria.sortColumn]) {
              return 1;
            } else {
              return 0;
            }
          } else {
            if (a[criteria.sortColumn] > b[criteria.sortColumn]) {
              return 1;
            } else if (a[criteria.sortColumn] < b[criteria.sortColumn]) {
              return -1;
            } else {
              return 0;
            }
          }
        });
      }
    }
  }
}


export interface ColumnSortedEvent {
  sortColumn: string;
  sortDirection: string;
}

export interface SortCriteria {
  sortColumn: string;
  sortDirection: string;
}
