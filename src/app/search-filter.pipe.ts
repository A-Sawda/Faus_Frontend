import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(list: any[], filterText: string): any {
    if (filterText && filterText.length) {
      if (list) {
        if (list[0].fullNameEmployee)
          return list.filter(item => item.fullNameEmployee.toLowerCase().includes(filterText));
        if (list[0].idJob)
          return list.filter(item => item.idJob.toLowerCase().includes(filterText));
      }
      else
        return [];
    }
    else if(list){
      return list;
    }
  }

}
