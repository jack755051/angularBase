/** dataSource */
export interface dataSourceInterface {
  status: string;
  serviceName: string;
  dataSource: string;
  dataFormat: string;
  updateCycle: string;
  changeTime: string;
  activationStatus: boolean;
}

/** 分頁  */
export interface PageConfig {
  totalCount: number;
  currentPage: number;
  rowsPerPage: number;
}

export interface DataSourceLink {
  urlShow: string;
  url: string;
}
