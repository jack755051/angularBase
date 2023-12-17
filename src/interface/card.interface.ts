export enum cardTitleType {
  'hot' = '話題熱銷',
  'newArrival' = '新品上市',
}

export interface cardData {
  title: string;
  model: string;
  imgUrl: string;
  descripation: string;
  tag: string[];
}
