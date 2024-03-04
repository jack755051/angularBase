import {Component, OnInit} from '@angular/core';
import {news} from "../../../interface/news.interface";

//假資料
const fakeData:news[]=[
  {newsTitle:"第一個問題",newsTime:'2024/01/01',newsContent:"第一則消息內容"},
  {newsTitle:"第二個問題",newsTime:'2024/01/02',newsContent:"第二則消息內容"}
]

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FAQComponent implements OnInit{
  panelOpenState = false;
  faqList:string[]= [
    "DVR", "NVR", "槍型攝影機", "高速球形攝影機", "CMS中控軟體"
  ]

  //選擇
  selectFaq(value:string){
    console.log("value",value)
  }

  //搜索
  search(value:string|null){

  }

  constructor() {
  }

  ngOnInit() {
  }

  protected readonly fakeData = fakeData;
}
