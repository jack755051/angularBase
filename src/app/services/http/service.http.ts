import {Observable} from "rxjs";
import {HttpService} from "./service-factory.http"

export interface IHttpService<T,E> {
  url: string;
  getTimeoutMs: () => number;
  getContentType: () => string;
  getAccept: () => string;
  getBody?: () => T;
  getMethod: () => string;
  call?: (service: HttpService, req: T) => Observable<E>;
}
