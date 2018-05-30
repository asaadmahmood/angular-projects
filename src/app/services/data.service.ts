import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  mainInputVal: string;
  constructor() { }

  setInputVal(value) {
    this.mainInputVal = value;
  }

  getInputVal() {
    return this.mainInputVal;
  }
}
