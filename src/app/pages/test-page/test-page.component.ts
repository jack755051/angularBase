import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TestService } from 'src/app/services/test.service';
import { GoBackService } from 'src/app/utils/go-back.service';
import { PageConfig, dataSourceInterface } from 'src/interface/test.interface';

//測試用假資料
const ELEMENT_DATA: dataSourceInterface[] = [
  {
    status: '合格',
    serviceName: '防護設備告警事件',
    dataSource: '智慧監控系統',
    dataFormat: 'JSON',
    updateCycle: '即時',
    changeTime: '2023-10-06 06：30：35',
    activationStatus: false,
  },
  {
    status: '不合格',
    serviceName: '港區水質',
    dataSource: '臺灣港群環境資訊平台',
    dataFormat: 'XML',
    updateCycle: '3hrs',
    changeTime: '2023-10-06 06：30：35',
    activationStatus: true,
  },
];

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  status: string = '';
  statusList: string[] = [];
  dataFormat: string = '';
  dataFormatList: string[] = [];
  keyword: string = '';

  page: PageConfig = {
    totalCount: 0,
    currentPage: 1,
    rowsPerPage: 10,
  };

  //表單欄位
  displayedColumns: string[] = [
    'status',
    'serviceName',
    'dataSource',
    'dataFormat',
    'updateCycle',
    'changeTime',
    'activationStatus',
    'transmissionMonitoring',
    'cleanSetting',
    'manage',
  ];

  //資料來源
  dataSource = new MatTableDataSource<dataSourceInterface>(ELEMENT_DATA)

  constructor(
    public goBackService: GoBackService,
    private dialog: MatDialog,
    private router: Router,
    public testService: TestService
  ) {
  }



  ngOnInit(): void {
    this.dataFormatList = ['JSON', '及時', 'XML', '資料庫讀取'];
    this.statusList = ['ok', 'waring'];
  }

  //搜尋按鈕
  search() {

  }


  //新增資源
  insertSource() {
  }
  //編輯資源
  editDataSource() {

  }
  //刪除
  deleteDataSource(dataId: string) { }

  //重置狀態與資料格式
  resetFilters() {
    this.status = '';
    this.dataFormat = '';
    this.keyword = '';
  }

  //啟用按鈕切換
  toggleChange(item: any) {
    console.log('開關狀態改變了！', item);
    console.log('this.statusList', this.dataSource.data);
  }
}
