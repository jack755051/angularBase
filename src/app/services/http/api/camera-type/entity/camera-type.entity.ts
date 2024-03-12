export interface mainProductDto {
  productValue: string | null,
  productTypeShowName: string,
  mainProductType?: string | null,
}

export interface techProductItem {
  value: string,
  showName: string,
}

export interface techProductList {
  mainType: string,
  newProductItem: techProductItem[]
}
