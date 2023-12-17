import { cardData } from 'src/interface/card.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  hotProuctCard: cardData[] = [
    {
      title: '2百萬畫素 四合一功能 水下50米紅外線攝影機',
      model: 'GC-AHD50-288',
      imgUrl: '/assets/images/GC-AHD50-288.jpeg',
      descripation:
        '影像解析度：1080PFuIHD即時影像。可達水下50米使用，適合遊艇、近海養殖使用。',
      tag: ['2MP', '水下', '多組態'],
    },
    {
      title: '2百萬畫素 四合一功能 水下50米紅外線攝影機',
      model: 'GC-AHD50-288',
      imgUrl: '/assets/images/GC-AHD50-288.jpeg',
      descripation:
        '影像解析度：1080PFuIHD即時影像。可達水下50米使用，適合遊艇、近海養殖使用。',
      tag: ['2MP', '水下', '多組態'],
    },
    {
      title: '2百萬畫素 四合一功能 水下50米紅外線攝影機',
      model: 'GC-AHD50-288',
      imgUrl: '/assets/images/GC-AHD50-288.jpeg',
      descripation:
        '影像解析度：1080PFuIHD即時影像。可達水下50米使用，適合遊艇、近海養殖使用。',
      tag: ['2MP', '水下', '多組態'],
    },
    {
      title: '2百萬畫素 四合一功能 水下50米紅外線攝影機',
      model: 'GC-AHD50-288',
      imgUrl: '/assets/images/GC-AHD50-288.jpeg',
      descripation:
        '影像解析度：1080PFuIHD即時影像。可達水下50米使用，適合遊艇、近海養殖使用。',
      tag: ['2MP', '水下', '多組態'],
    },
  ];

  constructor() {}
  ngOnInit(): void {}
}
