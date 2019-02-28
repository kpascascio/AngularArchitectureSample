import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  sampleArray: any[];
  filteredArray: any[];

  transform(items: any[], fields: string[], value: string, alias?: string[][]): any[] {
    if (!items) {
      return [];
    }
    if (!fields || !value) {
      return items;
    }
    if (!alias) {
      alias[0] = [''];
    }

    this.sampleArray = items;
    this.filteredArray = [];

    if (alias.length !== 0) {
      alias.forEach(aliasSingle => {
        fields.forEach(field => {
          const tempArray = this.sampleArray.filter(single => {
            if (typeof single[field] === 'string') {
              return single[field].toLowerCase().includes(value.toLowerCase());
            } else if (typeof single[field] === 'number' && aliasSingle !== ['']) {
              return aliasSingle[single[field]].toLowerCase().includes(value.toLowerCase());
            }
          });
          tempArray.forEach(single => {
            if (!this.filteredArray.includes(single)) {
              this.filteredArray.push(single);
            }
          });
        });
      });
    } else {
      fields.forEach(field => {
        const tempArray = this.sampleArray.filter(single => {
          if (typeof single[field] === 'string') {
            return single[field].toLowerCase().includes(value.toLowerCase());
          }
        });
        tempArray.forEach(single => {
          if (!this.filteredArray.includes(single)) {
            this.filteredArray.push(single);
          }
        });
      });
    }

    return this.filteredArray;
  }
}
