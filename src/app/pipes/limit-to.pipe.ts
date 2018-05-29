import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTo'
})

export class LimitToPipe implements PipeTransform {
  transform(value: string, num: number): any {
    const newVal = value.substr(0, num);
    return newVal;
  }
}
