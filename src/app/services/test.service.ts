import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(public router: Router) { }

  //  ----------------路由相關----------------------
  navigateToPage(address: string) {
    this.router.navigate([address]);
  }
}
