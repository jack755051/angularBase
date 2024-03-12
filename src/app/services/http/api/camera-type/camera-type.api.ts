//  import {environment} from 'src/environments/environment';
import {IHttpService} from '../../service.http';

export class CameraTypeApi implements IHttpService {
  url: string = 'http://localhost:3000/api/camera';

  constructor() {
  }

  getTimeoutMs() {
    return 15000;
  }

  getContentType() {
    return 'application/x-www-form-urlencoded'
  }

  getAccept() {
    return 'application/json'
  }

  getMethod() {
    return "GET"
  }
}
