import { Component, OnInit } from '@angular/core';
import { GoBackService } from 'src/app/utils/go-back.service';

@Component({
  selector: 'app-product-hot-page',
  templateUrl: './product-hot-page.component.html',
  styleUrls: ['./product-hot-page.component.scss'],
})
export class ProductHotPageComponent implements OnInit {
  constructor(public goBackService: GoBackService) {}

  ngOnInit(): void {}
}
