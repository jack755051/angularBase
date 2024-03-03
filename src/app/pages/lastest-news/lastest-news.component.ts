import {Component, OnInit, ViewChild} from '@angular/core';
import {news} from "../../../interface/news.interface";
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';

//假資料
const fakeData:news[]=[
  {newsTitle:"第一則消息",newsTime:'2024/01/01',newsContent:"第一則消息內容"},
  {newsTitle:"第二則消息",newsTime:'2024/01/02',newsContent:"第二則消息內容"}
]

@Component({
  selector: 'app-lastest-news',
  templateUrl: './lastest-news.component.html',
  styleUrls: ['./lastest-news.component.scss']
})
export class LastestNewsComponent implements OnInit{
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  panelOpenState = false;
  constructor() {

  }

  ngOnInit() {
  }


  protected readonly fakeData = fakeData;
}
