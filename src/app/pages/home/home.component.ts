import { cardData, cardTitleType } from 'src/interface/card.interface';
import { Component, OnInit } from '@angular/core';
import { imageArray } from 'src/interface/image.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cardDataTitleFormHome = cardTitleType
  imageArraySrc: imageArray[] = [
    { imageSrc: '/assets/images/banner_03_realityCity.png', imageAlt: 'city_01' },
    { imageSrc: '/assets/images/banner_02_realityCity.png', imageAlt: 'city_02' },
    { imageSrc: '/assets/images/banner_01.png', imageAlt: 'city_03' },
    // { imageSrc: '/assets/images/banner_01.png', imageAlt: 'city_04' },
  ]

  //話題熱銷
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

  //新品上市
  newArrivalProuctCard: cardData[] = [
    {
      title: '8百萬畫素網路型星光夜視攝影機(電動變焦)',
      model: 'GP-BH048IP-AFZ',
      imgUrl: '/assets/images/GP-BH048IP-AFZ.png',
      descripation:
        '採用H.265/H.264/MJPEG壓縮格式並支援雙碼流設計。',
      tag: ['8MP', '電動變焦', 'IP Cam'],
    },
    {
      title: '8百萬畫素網路型星光夜視攝影機(電動變焦)',
      model: 'GP-BH048IP-AFZ',
      imgUrl: '/assets/images/GP-BH048IP-AFZ.png',
      descripation:
        '採用H.265/H.264/MJPEG壓縮格式並支援雙碼流設計。',
      tag: ['8MP', '電動變焦', 'IP Cam'],
    },
    {
      title: '8百萬畫素網路型星光夜視攝影機(電動變焦)',
      model: 'GP-BH048IP-AFZ',
      imgUrl: '/assets/images/GP-BH048IP-AFZ.png',
      descripation:
        '採用H.265/H.264/MJPEG壓縮格式並支援雙碼流設計。',
      tag: ['8MP', '電動變焦', 'IP Cam'],
    },
    {
      title: '8百萬畫素網路型星光夜視攝影機(電動變焦)',
      model: 'GC-AHD50-288',
      imgUrl: '/assets/images/GP-BH048IP-AFZ.png',
      descripation:
        '採用H.265/H.264/MJPEG壓縮格式並支援雙碼流設計。',
      tag: ['8MP', '電動變焦', 'IP Cam'],
    },
  ];

  constructor() { }
  ngOnInit(): void { }
}
