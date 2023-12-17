export enum cardTitleType {
  '話題熱銷' = 1,
  '新品上市' = 2,
}

export interface cardData {
  title: string;
  model: string;
  imgUrl: string;
  descripation: string;
  tag: string[];
}
