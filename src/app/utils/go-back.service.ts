import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
/**
 * 回上一頁
 */
@Injectable({
  providedIn: 'root'
})
export class GoBackService {

  constructor(private _location: Location) { }

  back() {
    this._location.back();
  }
}
