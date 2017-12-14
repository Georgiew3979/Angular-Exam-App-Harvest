import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FocusServiceService {
  private focusedElement = new Subject<any>()

  receiveElement = this.focusedElement.asObservable()

  constructor() { }

  changingData(data) {
    this.focusedElement.next(data)
  }

}
