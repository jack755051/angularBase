import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {techSupportData} from "../../../interface/tech-support.interface";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {FormControl} from "@angular/forms";
import {HttpClient} from '@angular/common/http';
import {
  mainProductDto,
  techProductItem,
  techProductList
} from "../../services/http/api/camera-type/entity/camera-type.entity";
import {GetProductTypeService} from "../../services/common/get-product-type.service";
import {HttpService} from "../../services/http/service-factory.http";


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

  techDatas: string[] = [
    "型錄下載", "操作手冊", "軟體下載", "其他"
  ]

  productTypes: mainProductDto[] = [];
  groupedData!: techProductList[];


  //表單初始化-產品類型 / 資料類型 / 關鍵字搜索
  techProductForm = new FormControl('')
  techDataForm = new FormControl('')
  techKeywordForm = new FormControl('')

  // 添加一个标志用于控制是否需要执行搜索
  isSearchAllowed = true;

  constructor(
    private https: HttpService,
    private getProductTypeService: GetProductTypeService
  ) {
  }

  ngOnInit() {
    this.loadProductTypes();
    //透過api取得table資料
    // this.search(null)

    //產品類型
    this.techProductForm.valueChanges.subscribe(value => {
      // console.log('techProductForm', value)
      if (this.isSearchAllowed) {
        this.search(value);
      }
    })
    //資料類型
    this.techDataForm.valueChanges.subscribe(value => {
      if (this.isSearchAllowed) {
        this.search(value);
      }
    })
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
  search(value: string | null) {

    // 打出api前，设置 isSearchAllowed 为 false 防止额外的搜索
    this.isSearchAllowed = false;

    //打出api
    // const apiUrl = 'https://your-api-endpoint.com';
    // this.https.post(apiUrl, {product: value}).subscribe({
    //   next: (response) => {
    //     console.log('API Response:', response);
    //     this.isSearchAllowed = true;
    //   },
    //   error:(error)=>{
    //     console.error('API Call Error:', error);
    //   }
    // })

    // 模拟 API 调用...
    setTimeout(() => {
      // 假设这里是 API 调用的回调
      // API 调用完成后，重置表单控件
      this.techProductForm.setValue(null);
      this.techDataForm.setValue(null);
      this.techKeywordForm.setValue(null);

      // 重新允许搜索
      this.isSearchAllowed = true;
    }, 1000);

  }

  //關鍵字搜索
  keyWordSearch() {
    const searchValue = this.techKeywordForm.value;
    this.search(searchValue)
  }

  // 取得產品類型
  loadProductTypes() {
    this.getProductTypeService.getProductType().subscribe({
      next: (data) => {
        this.productTypes = [...data]

        const convertedData: techProductList[] = this.productTypes.reduce((acc, curr) => {
          const existingType = acc.find(item => item.mainType === curr.mainProductType);

          const newProductItem: techProductItem = {
            value: curr.productValue ?? "", // 处理 null 的情况，根据需要调整
            showName: curr.productTypeShowName
          };

          if (existingType) {
            // 如果存在，向该类型的 newProductItem 数组中添加新的产品项
            existingType.newProductItem.push(newProductItem);
          } else {
            // 如果不存在，创建新的类型对象并添加到累加器中
            acc.push({
              mainType: curr.mainProductType ?? "默认分类", // 处理 null 的情况，根据需要调整
              newProductItem: [newProductItem]
            });
          }

          return acc;
        }, [] as techProductList[])

        this.groupedData = convertedData

        console.log('Product types loaded', this.groupedData);
      },
      error: (error) => {
        console.error('Error loading product types', error);
      }
    });
  }

}
