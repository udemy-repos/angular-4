import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], type = 'asc'): any {
    return value.sort((a, b) => {
      if (a.name > b.name) {
        return type === 'asc' ? 1 : -1;
      } else if (a.name < b.name) {
        return type === 'asc' ? -1 : 1;
      } else {
        return 0;
      }
    });
  }

}
