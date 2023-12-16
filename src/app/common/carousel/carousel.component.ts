import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  //圖片列表
  imageArray: string[] = [];

  constructor() {
    this.imageArray.push('aaa', 'bbb', 'ccc');
  }
  ngOnInit(): void {}

  presentImage() {
    console.log('上一張');
  }

  nextImage() {
    console.log('下一張');
  }
}
