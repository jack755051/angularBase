import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(public router: Router, private http: HttpClient) { }

  //  ----------------路由相關----------------------
  navigateToPage(address: string) {
    this.router.navigate([address]);
  }

  //  ----------------取得資料----------------------
  // getProductData(productId: string) {
  //   return this.http.get(`${this.apiUrl}/${productId}`);
  // }
}
