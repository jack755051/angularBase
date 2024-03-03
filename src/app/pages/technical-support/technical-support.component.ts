import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {techSupportData} from "../../../interface/tech-support.interface";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";


const SOURCE_DATA: techSupportData[] = [
  {
    techSupportDataId: '1',
    techProductType: 'DVR01',
    techDataType: '操作手冊',
    techDocumentName: 'DVR操作說明01',
    techApiLink: 'link01'
  },
  {
    techSupportDataId: '2',
    techProductType: 'DVR02',
    techDataType: '操作手冊',
    techDocumentName: 'DVR操作說明02',
    techApiLink: 'link02'
  },
  {
    techSupportDataId: '3',
    techProductType: 'DVR03',
    techDataType: '操作手冊',
    techDocumentName: 'DVR操作說明03',
    techApiLink: 'link03'
  },
  {
    techSupportDataId: '4',
    techProductType: 'DVR04',
    techDataType: '操作手冊',
    techDocumentName: 'DVR操作說明04',
    techApiLink: 'link01'
  },
  {
    techSupportDataId: '5',
    techProductType: 'DVR05',
    techDataType: '操作手冊',
    techDocumentName: 'DVR操作說明05',
    techApiLink: 'link01'
  },
  {
    techSupportDataId: '6',
    techProductType: 'DVR06',
    techDataType: '操作手冊',
    techDocumentName: 'DVR操作說明06',
    techApiLink: 'link01'
  },
  {
    techSupportDataId: '7',
    techProductType: 'DVR07',
    techDataType: '操作手冊',
    techDocumentName: 'DVR操作說明07',
    techApiLink: 'link01'
  },
  {
    techSupportDataId: '8',
    techProductType: 'DVR08',
    techDataType: '操作手冊',
    techDocumentName: 'DVR操作說明08',
    techApiLink: 'link01'
  },
  {
    techSupportDataId: '9',
    techProductType: 'DVR09',
    techDataType: '操作手冊',
    techDocumentName: 'DVR操作說明09',
    techApiLink: 'link01'
  },
  {
    techSupportDataId: '10',
    techProductType: 'DVR10',
    techDataType: '操作手冊',
    techDocumentName: 'DVR操作說明10',
    techApiLink: 'link01'
  },
  {
    techSupportDataId: '11',
    techProductType: 'DVR11',
    techDataType: '操作手冊',
    techDocumentName: 'DVR操作說明11',
    techApiLink: 'link01'
  },
  {
    techSupportDataId: '12',
    techProductType: 'DVR12',
    techDataType: '操作手冊',
    techDocumentName: 'DVR操作說明12',
    techApiLink: 'link01'
  },
  {
    techSupportDataId: '13',
    techProductType: 'DVR13',
    techDataType: '操作手冊',
    techDocumentName: 'DVR操作說明13',
    techApiLink: 'link13'
  },
  {
    techSupportDataId: '14',
    techProductType: 'DVR14',
    techDataType: '操作手冊',
    techDocumentName: 'DVR操作說明14',
    techApiLink: 'link14'
  },
  {
    techSupportDataId: '15',
    techProductType: 'DVR15',
    techDataType: '操作手冊',
    techDocumentName: 'DVR操作說明15',
    techApiLink: 'link15'
  }

]


@Component({
  selector: 'app-technical-support',
  templateUrl: './technical-support.component.html',
  styleUrls: ['./technical-support.component.scss']
})
export class TechnicalSupportComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  techProducts:string[] =[
    "DVR","NVR","槍型攝影機","高速球形攝影機high-speed","CMS中控軟體"
  ]

  techDatas:string[] =[
    "型錄下載","操作手冊","軟體下載","其他"
  ]

  constructor() {
  }

  ngOnInit() {
    //透過api取得table資料

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
  }


  //  table表頭
  //  ['產品類型', '資料類型', '檔案名稱', '功能']
  displayedColumns: string[] = ['techProductType', 'techDataType', 'techDocumentName', 'function']
  //table資料，SOURCE_DATA先暫時使用假資料
  dataSource = new MatTableDataSource<techSupportData>(SOURCE_DATA);

  techSupportDownload(row: any) {
    console.log(`檔案下載${row.techApiLink}`)
  }

  //搜尋=>單純將api送出，主要控制下拉選單
  search() {
    //打出api
  }

}
