/**
 * If the length of the stepNumber is one, the formatStep 
 * will prepend a '0'. I recognize we only have four steps,
 * but if someone changes the API, or decides we need more than 
 * nine steps, we shouldn't be surpised.
 * 
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatStep'
})
export class FormatStepPipe implements PipeTransform {
  transform(value: String, ...args: unknown[]): String {
    return value.length === 1 ? `0${value}` : value;
  }

}
