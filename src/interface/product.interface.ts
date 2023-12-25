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
  system?: string;
  //圖像傳感器
  image_sensor?: string;
  //最大
  max_resolution?: string;
  //最低照度
  min_illumination?: string;
  //快門
  shutter_time?: string;
  // 日夜切换模式
  day_night?: string;
  // 角度調節
  angle_adjustment?: string;
}
//鏡頭
export interface lens_specification {
  //鏡頭
  lens_type?: string;
  //焦距和視場範圍
  focal_length_FOV?: string;
  //鏡頭接口
  lens_Mount?: string;
  //光圈類型
  iris_Type?: string;
  //光圈
  aperture?: string;
  //景深
  depth_of_field?: string;
}
//補光
export interface illuminator_specification {
  // 輔助燈光類型
  supplement_light_type?: string;
  //輔助燈光範圍
  supplement_light_range?: string;
  //智能輔助燈光
  smart_supplement_light?: string;
  //紅外線波長
  IR_wavelength?: string;
}
//視頻
export interface video_specification {
  //主碼流
  main_stream?: string;
  //子碼流
  sub_stream?: string;
  //第三碼流
  third_stream?: string;
  //視頻壓縮格式
  video_compression?: string;
  //視頻比特率
  video_bit_rate?: string;
  //H.264類型
  h264_type?: string;
  //H.265類型
  h265_type?: string;
  //碼率控制
  bit_rate_control?: string;
  //可伸縮視頻編碼
  scalable_video_coding?: string;
  //感興趣區域
  region_of_interest?: string;
}
//音頻
export interface audio_specification {
  //音頻壓縮
  audio_compression?: string;
  //音頻比特率
  audio_bit_bate?: string;
  //音頻採樣率
  audio_sampling_rate?: string;
  //環境噪聲過濾
  environment_noise_filtering?: string;
}
//網路
export interface network_specification {
  //網路協定
  protocols?: string;
  //瀏覽器支持
  web_browser?: string;
  //網路儲存功能
  network_storage?: string;
}
//圖像
export interface image_specification {
  //圖像參數切換
  image_parameters_switch?: string;
  //圖像設置
  image_settings?: string;
  //日/夜切換
  day_night_switch?: string;
  //圖像增強
  image_enhancement?: string;
  //信噪比 (SNR)
  SNR?: string;
  //寬動態範圍 (WDR)
  wide_dynamic_range?: string;
  // 隱私遮罩
  Privacy_mask?: string;
}
//接口
export interface interface_specification {
  //乙太網介面
  ethernet_interface?: string;
  // 機板存儲
  on_board_storage?: string;
  // 內置麥克風
  built_in_microphone?: string;
  // 重置鍵
  reset_key?: string;
}
//事件
export interface event_specification {
  // 基本事件
  basic_event?: string;
  // 聯動
  linkage?: string;
  //智能事件
  smart_event?: string;
}
//一般規範
export interface general_specification {
  //材質
  material?: string;
  //尺寸
  dimensions?: string;
  //重量
  Weight?: string;
  //功能
  general_function?: string;
  //系統語言
  language?: string;
}
//認證
export interface approval_specification {
  //供電
  power?: string;
  //環境
  environment?: string;
  //防水防塵
  protection?: string;
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
