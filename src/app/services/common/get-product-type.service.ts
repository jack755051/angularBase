import { Injectable } from '@angular/core';
import { CameraTypeApi } from "../http/api/camera-type/camera-type.api";
import { HttpService } from "../http/service-factory.http";
import { Observable, map } from "rxjs";
import { mainProductDto } from "../http/api/camera-type/entity/camera-type.entity";

@Injectable({
  providedIn: 'root'
})
export class GetProductTypeService {

  constructor(private https: HttpService) {}

  getProductType(): Observable<mainProductDto[]> {
    const api = new CameraTypeApi();
    const req: string = '';

    // 直接返回处理后的 Observable 流
    return this.https.request<any, mainProductDto[]>(api, req).pipe(
      map((res: mainProductDto[]): mainProductDto[] => {
        return res.map(product => {
          // 根据 mainProductValue 的值更改 productTypeShowName
          switch(product.productValue) {
            case 'Network Video Recorder':
              return {...product, productTypeShowName: 'NVR'};
            case 'Digital Video Recorder':
              return {...product, productTypeShowName: 'DVR'};
            case 'Pentabrid Digital Video Recorder':
              return {...product, productTypeShowName: 'XVR'};
            default:
              // 对于其他产品不做更改
              return product;
          }
        });
      })
    );
  }
}
