import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  cameraSpecificationType,
  productItems,
} from 'src/interface/product.interface';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  hotOrNew!: boolean;
  //產品結果
  result: productItems = {
    title:
      '4 MP Smart Hybrid Light with ColorVu Fixed Mini Bullet Network Camera',
    productId: '12121',
    model: 'GC-AHD30-6',
    imgUrl: '/assets/images/GP-BH048IP-AFZ.png',
    pdfFileUrl: '#',
    descripation: '影像解析度：1080P Full HD 即時影像',
    descripationGroup: {
      descripationArticle: [
        'High quality imaging with 4 MP resolution',
        'Smart Hybrid Light: advanced technology with long range',
        'Clear imaging against strong back light due to 130 dB WDR technology',
        'Efficient H.265+ compression technology',
        'Focus on human and vehicle classification based on deep learning',
        '-U: Built-in microphone for real-time audio security',
        'Water and dust resistant (IP67)',
      ],
      descripationImageUrl: [
        '/assets/images/icon/IP67-.png',
        '/assets/images/icon/IP67-.png',
        '/assets/images/icon/IP67-.png',
        '/assets/images/icon/IP67-.png',
      ],
    },
    tag: ['水下', '紅外線', '四合一', '2百萬畫素'],
  };

  // camera:cameraSpecificationType={

  // }

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const productId = params['productId'];
    });
  }

  //檔案下載
  download() {
    console.log('Downloading');
  }
}
