import { productItems } from './product.interface';

export enum cardTitleType {
  'hot' = '話題熱銷',
  'newArrival' = '新品上市',
}

/**
 * Partial<Type> 使所有属性变为可选。
 * Pick<Type, Keys> 从类型中选取一组属性。
 * Omit<Type, Keys> 从类型中排除一组属性。
 */
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type cardData = Optional<
  productItems,
  'pdfFileUrl' | 'descripationGroup'
>;
