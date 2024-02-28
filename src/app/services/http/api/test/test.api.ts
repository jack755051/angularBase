//  import {environment} from 'src/environments/environment';
import {IHttpService} from '../../service.http';

export class ConnectTokenApi implements IHttpService {
  url: string = '';

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
