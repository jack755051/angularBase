import {Component, OnInit} from '@angular/core';
import {news} from "../../../interface/news.interface";
import {HttpService} from "../../services/http/service-factory.http";
import {CameraTypeApi} from "../../services/http/api/camera-type/camera-type.api";
import {mainProductDto} from "../../services/http/api/camera-type/entity/camera-type.entity";
import {map} from "rxjs";
import {GetProductTypeService} from "../../services/common/get-product-type.service";

//假資料
const fakeData: news[] = [
  {newsTitle: "第一個問題", newsTime: '2024/01/01', newsContent: "第一則消息內容"},
  {newsTitle: "第二個問題", newsTime: '2024/01/02', newsContent: "第二則消息內容"}
]

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FAQComponent implements OnInit {
  panelOpenState = false;
  //用來取得上方的mat-chip-listbox
  tempArray: number[] = [];
  selectAll: boolean = false;

  productTypes: mainProductDto[] = [{productValue: null, productTypeShowName: "全部"}];

  constructor(
    private https: HttpService,
    private getProductTypeService: GetProductTypeService
  ) {
  }

  ngOnInit() {
    this.loadProductTypes();
  }

  //搜索
  search(value: string | null) {

  }

  selectIndex(value: number) {
    console.log("this.tempArray_value", value)
    const index = this.tempArray.indexOf(value);
    //按下全部會有兩個狀況
    if (value === 0) {
      this.selectAll = !this.selectAll
      //全選
      if (this.selectAll) {
        this.tempArray = Array.from({length: this.productTypes.length}, (_, i) => i);
      } else {
        //取消全選
        this.tempArray = []
      }
    } else {

      if (index > -1) {
        // 如果索引已经存在，移除它
        this.tempArray.splice(index, 1);
      } else {
        // 如果索引不存在，添加它
        this.tempArray.push(value);
      }

      this.tempArray = [...this.tempArray.sort()];

    }


    console.log("this.tempArray", this.tempArray)
    //執行搜索
    this.search(null)
  }

  // 取得產品類型
  loadProductTypes() {
    this.getProductTypeService.getProductType().subscribe({
      next: (data) => {
        this.productTypes = [...this.productTypes, ...data]
        console.log('Product types loaded', this.productTypes);
      },
      error: (error) => {
        console.error('Error loading product types', error);
      }
    });
  }


  protected readonly fakeData = fakeData;
}
