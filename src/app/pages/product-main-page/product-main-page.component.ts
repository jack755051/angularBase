import { Component, OnInit } from '@angular/core';
import { GoBackService } from 'src/app/utils/go-back.service';

@Component({
  selector: 'app-product-main-page',
  templateUrl: './product-main-page.component.html',
  styleUrls: ['./product-main-page.component.scss'],
})
export class ProductMainPageComponent implements OnInit {
  constructor(public goBackService: GoBackService) {}
  ngOnInit(): void {}
}
