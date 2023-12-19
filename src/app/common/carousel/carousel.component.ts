import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { imageArray } from 'src/interface/image.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, OnChanges {
  private carouselInterval: any;
  //圖片列表
  @Input() imageArray: imageArray[] = [];

  imageCount!: number;
  indices: number[] = []; // 新增数组
  currentImageIndex: number = 0;
  activeBarProgress: number = 0;
  // 定时器的时间 => 毫秒
  changeImageDelay: number = 2000;

  constructor() {
    this.carouselPlay();
  }
  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['imageArray']) {
      this.imageCount = this.imageArray.length;
      this.indices = Array.from({ length: this.imageCount }, (num, i) => i);
    }
  }

  ngOnDestroy() {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  }

  //自動撥放輪播圖
  carouselPlay() {
    //設置定時器切換圖片
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
    this.carouselInterval = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.imageCount;
      this.judgeImage(this.currentImageIndex)
      //如果最後一張
    }, this.changeImageDelay)

  }

  //上一張或下一張
  changeImage(presentOrNext: string) {
    // 暫停自動播放
    clearInterval(this.carouselInterval);

    //如果是上一張
    if (presentOrNext === "present") {
      this.currentImageIndex -= 1
    } else {
      this.currentImageIndex += 1
    }
    this.judgeImage(this.currentImageIndex);

    // 重新啟動自動播放
    this.carouselPlay();
  }

  // 判斷循環圖片
  judgeImage(current: number) {
    if (current < 0) {
      this.currentImageIndex = this.imageCount - 1
    }
    if (current > this.imageCount - 1) {
      this.currentImageIndex = 0
    }
  }

  //下方按鈕
  changeImageBottombtn(clickIndex: number) {
    // 暫停自動播放
    clearInterval(this.carouselInterval);
    this.currentImageIndex = clickIndex;
    //3秒後，自動開始撥放
    setTimeout(() => { this.carouselPlay(); }, 2500)
  }

  //活動條的進度的屬性
  updateActiveBarProgress() {
    const interval = 20;
    //每次新增的百分比
    const increment = 100 / (this.changeImageDelay / interval)
    const progressInterval = setInterval(() => {
      this.activeBarProgress += increment;
      if (this.activeBarProgress >= 100) {
        clearInterval(progressInterval);
      }
    }, interval)
  }
}
