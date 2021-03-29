import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators'
import { environment } from '../../environments/environment';

import {VersionedContent, Step, SimpleStep} from "../interfaces/steps";

@Injectable({
  providedIn: 'root'
})
export class CalloutService {

  constructor(private http: HttpClient) {
      this.simplifyStep = this.simplifyStep.bind(this);
      this.formatData = this.formatData.bind(this);
   }

   getCallouts(): Observable<SimpleStep[]> {
    return this.http.get(environment.apiURL).pipe(
      catchError(this.handleError<Step[]>("getCallouts", [])),
      map(res => this.formatData(res as Step[]))
      )
   }

   private handleError<T>(operation = 'operation', result?: T) {
     return (error: any): Observable<T> => {
        console.error(error);
        return of(result as T);
     }
   }
  
   /**
   * 
   * @param data 
   * @returns a sorted array of simplified step objects.
   */
  formatData(data: Step[]): SimpleStep[] {
    const sorted = this.sortSteps(data);
    return sorted.map(step => this.simplifyStep(step));
  }

  /**
   * 
   * @param step 
   * @returns the versionContent object with the most recent effective date.
   */
  getMostRecentContent(step: Step): VersionedContent {
    /**
     * My first version of getMostRecentContent used a forEach loop that would 
     * update a variable called "latest" when it found a newer version.  
     * But I think this version makes my intent more clear.
     */
    const byDateInReverse = (a, b) => {
      const aTime = new Date(a.effectiveDate).getTime();
      const bTime = new Date(b.effectiveDate).getTime();
      if (aTime > bTime) {
        return -1;
      }

      if (aTime < bTime) {
        return 1;
      }

      return 0;
    }
    // returning a copy to prevent side effects.
    return [...step.versionContent].sort(byDateInReverse)[0];
  }
  
  /**
   * Returns a simplified version of the step containing only the 
   * information needed.
   * @param step
   * @returns { 
   *    stepNumber: string
   *    title: string
   *    body: string
   * }
   */
  simplifyStep(step: Step): SimpleStep {
    const { stepNumber } = step;
    const { title, body } = this.getMostRecentContent(step);
    return { stepNumber, title, body }
  }
  
  /**
   * 
   * @param steps 
   * @returns an array of steps sorted by stepNumber
   */
  sortSteps(steps: Step[]): Step[] {
    
    return [...steps].sort((a, b) => {
      if (a.stepNumber < b.stepNumber) {
        return -1;
      }

      if (a.stepNumber > b.stepNumber) {
        return 1;
      }
      return 0;
    });
  }
}
