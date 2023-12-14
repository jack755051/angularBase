import { Component } from '@angular/core';
import { DataSourceLink } from 'src/interface/test.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor() {
    this.dataSourceUrlList;
    this.dataSourceUrlList;
  }

  dataSourceUrlList: DataSourceLink[] = [
    { urlShow: '資料來源列表', url: '/data-source-list' },
    { urlShow: '編輯來源', url: '/data-source-edit' },
    {
      urlShow: '傳輸監控',
      url: '/data-source-transmission-monitor',
    },
  ];

  matMenuProudct: any = [];
}
