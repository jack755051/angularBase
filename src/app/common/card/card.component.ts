import { Component, OnInit, Input } from '@angular/core';
import { cardData, cardTitleType } from 'src/interface/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() cardData: cardData[] = [];
  @Input() cardDataTitle!: cardTitleType;

  constructor() {}

  ngOnInit(): void {}
}
