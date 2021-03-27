import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatStep'
})
export class FormatStepPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
