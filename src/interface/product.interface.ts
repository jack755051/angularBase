// 產品介面
export interface productItems {
  title: string;
  productId: string;
  model: string;
  imgUrl: string;
  pdfFileUrl: string;
  descripation: string;
  descripationGroup: descripationGroup;
  tag: string[];
}

/**
 * descripationArticle : 文字描述
 * descripationImageUrl : 產品特色圖片描述
 */
export interface descripationGroup {
  descripationArticle: string[];
  descripationImageUrl: string[];
}

export interface cameraSpecificationType {
  camera: camera_specification;
  lens: lens_specification;
  illuminator: illuminator_specification;
  video: video_specification;
  audio: audio_specification;
  network: network_specification;
  image: image_specification;
  interface: interface_specification;
  event: event_specification;
  general: general_specification;
  approval: approval_specification;
}

//攝影機規格
export interface camera_specification {
  //系統
  system: string;
  //圖像傳感器
  image_sensor: string;
  //最大
  max_resolution: string;
  //最低照度
  min_illumination: string;
  //快門
  shutter_time: string;
  // 日夜切换模式
  day_night: string;
  angle_adjustment: string;
}
//鏡頭
export interface lens_specification {}
//補光
export interface illuminator_specification {}
//視頻
export interface video_specification {
  //主碼流
  // Main Stream
}
//音頻
export interface audio_specification {}
//網路
export interface network_specification {
  //網路協定
  protocols: string;
  //瀏覽器支持
  web_browser: string;
  //網路儲存功能
  network_storage: string;
}
//圖像
export interface image_specification {}
//接口
export interface interface_specification {}
//事件
export interface event_specification {}
//一般規範
export interface general_specification {
  //材質
  material: string;
  //尺寸
  dimensions: string;
  //重量
  Weight: string;
  //功能
  general_function: string;
  //系統語言
  language: string;
}
//認證
export interface approval_specification {
  //供電
  power: string;
  //環境
  environment: string;
  //防水防塵
  protection: string;
}

//攝像頭規格enum
export enum cameraSpecification {
  '攝影機' = 1,
  '鏡頭' = 2,
  '補光' = 3,
  '視頻' = 4,
  '音頻' = 5,
  '網路' = 6,
  '圖像' = 7,
  '接口' = 8,
  '事件' = 9,
  '規範' = 10,
  '認證' = 11,
}
