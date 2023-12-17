import { Component, Input, OnInit } from '@angular/core';
import { cardData, cardTitleType } from 'src/interface/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() cardData: cardData[] = [];
  @Input() cardDataTitle!: cardTitleType;

  // cardDataTitle = cardDataTitle;

  constructor() { }

  ngOnInit(): void { }

  //查看更多_進入商品頁面
  check_more_card(i: number) {
    console.log("序列index", i)
  }
}
