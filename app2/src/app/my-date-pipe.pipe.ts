import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDatePipe'
})
export class MyDatePipePipe implements PipeTransform {

  transform(date: Date, ...args: unknown[]): unknown {
    return  date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()+ ' '+date.getHours()+':'+date.getMinutes();
  }

}
