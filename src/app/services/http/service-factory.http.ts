import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OAuthStorage } from 'angular-oauth2-oidc';
import { Observable, of  } from 'rxjs';
import {IHttpService} from './service.http'

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private https: HttpClient) {}

  request<T, E>(service: IHttpService, req: T, access_token: string = ''): Observable<E> {
    // 如果 access_token 直接作為參數傳入，則使用該 token
    let token = access_token;
    let XSRF_token = this.getCookie('XSRF-TOKEN') ?? '';
    const headers = new HttpHeaders({
      'Content-Type': service.getContentType(),
      Authorization: token ? `Bearer ${token}` : '',
      RequestVerificationToken: XSRF_token,
      Accept: service.getAccept(),
    });

    // 根據不同的 HTTP 方法，發送請求
    switch (service.getMethod()) {
      case 'GET':
        let params = new HttpParams();
        if (req) {
          for (const key in req) {
            if (req.hasOwnProperty(key)) {
              const val: any = req[key];
              params = params.set(key, val);
            }
          }
        }
        return this.https.get<E>(service.url, { headers, params });

      case 'POST':
        return this.https.post<E>(service.url, req, { headers });

      case 'DELETE':
        return this.https.delete<E>(service.url, { headers, body: req });

      case 'PUT':
        return this.https.put<E>(service.url, req, { headers });

      default:
        return new Observable<E>();
    }
  }

  // 下載檔案的方法和其他方法相似，根據實際情況進行調整

  getCookie(key: string): string | null {
    return (
      decodeURIComponent(
        document.cookie.replace(
          new RegExp(
            `(?:(?:^|.*;)\\s*${encodeURIComponent(key).replace(/[\-\.\+\*]/g, '\\$&')}\\s*=\\s*([^;]*).*$)|^.*$`
          ),
          '$1'
        )
      ) || null
    );
  }
}

// @Injectable({ providedIn: 'root' })
// export class HttpService {
//   constructor(private https: HttpClient, private authStorage: OAuthStorage) {}
//
//   request<T, E>(
//     service: IHttpService,
//     req: T,
//     access_token: any = ''
//   ): Observable<E> {
//     // take-permission-grants 一定要有 token
//     // 留著檢查
//     if (service.url.includes('take-permission-grants')) {
//       const t = this.authStorage.getItem('access_token');
//       // console.log('t', t, service.url);
//       if (!t) {
//         console.warn('take-permission-grants without token');
//       }
//     }
//
//     let token = this.authStorage.getItem('access_token') ?? access_token;
//     let XSRF_token = this.getCookie('XSRF-TOKEN') ?? '';
//     const headers = new HttpHeaders({
//       'Content-Type': service.getContentType(),
//       Authorization: 'Bearer ' + token,
//       RequestVerificationToken: XSRF_token,
//       Accept: service.getAccept(),
//     });
//
//     if (service.getMethod() === 'GET') {
//       const options = {
//         headers: headers,
//       };
//       if (req) {
//         // console.log('req', req);
//         let params = new HttpParams();
//
//         for (const key in req) {
//           if ((req as any).hasOwnProperty(key)) {
//             const val: any = req[key];
//             params = params.set(key, val);
//           }
//         }
//
//         return this.https.get<any>(service.url, {
//           headers: headers,
//           params: params,
//         });
//       }
//
//       return this.https.get<E>(service.url, options);
//     } else if (service.getMethod() === 'POST') {
//       const options = {
//         headers: headers,
//       };
//
//       return this.https.post<E>(service.url, req, options);
//     } else if (service.getMethod() === 'DELETE') {
//       const options = {
//         headers: headers,
//         body: req,
//       };
//       return this.https.delete<E>(service.url, options);
//     } else if (service.getMethod() === 'PUT') {
//       const options = {
//         headers: headers,
//       };
//       return this.https.put<E>(service.url, req, options);
//     } else {
//       return new Observable<E>();
//     }
//   }
//
//   /** 下載檔案 */
//   download<T>(service: IHttpService, req: T): Observable<ArrayBuffer> {
//     let token = this.authStorage.getItem('access_token') ?? '';
//     let XSRF_token = this.getCookie('XSRF-TOKEN') ?? '';
//     const headers = new HttpHeaders({
//       'Content-Type': service.getContentType(),
//       Authorization: 'Bearer ' + token,
//       RequestVerificationToken: XSRF_token,
//       Accept: service.getAccept(),
//     });
//
//     if (service.getMethod() === 'GET') {
//       const options = {
//         headers: headers,
//         responseType: 'blob' as 'json',
//       };
//
//       return this.https.get<ArrayBuffer>(service.url, options);
//     } else if (service.getMethod() === 'POST') {
//       const options = {
//         headers: headers,
//         responseType: 'blob' as 'json',
//       };
//
//       return this.https.post<ArrayBuffer>(service.url, req, options);
//     } else {
//       return new Observable<ArrayBuffer>();
//     }
//   }
//
//   /** DI 下載測試 */
//   downloadDI<T>(service: IHttpService, req: T): Observable<ArrayBuffer> {
//     let token = this.authStorage.getItem('access_token') ?? '';
//     let XSRF_token = this.getCookie('XSRF-TOKEN') ?? '';
//     const headers = new HttpHeaders({
//       'content-type': 'application/octet-stream',
//       Authorization: 'Bearer ' + token,
//       RequestVerificationToken: XSRF_token,
//       Accept: service.getAccept(),
//     });
//
//     if (service.getMethod() === 'GET') {
//       const options = {
//         headers: headers,
//         responseType: 'blob' as 'json',
//       };
//
//       return this.https.get<ArrayBuffer>(service.url, options);
//     } else if (service.getMethod() === 'POST') {
//       const options = {
//         headers: headers,
//         responseType: 'blob' as 'json',
//       };
//
//       return this.https.post<ArrayBuffer>(service.url, req, options);
//     } else {
//       return new Observable<ArrayBuffer>();
//     }
//   }
//
//   requestFormdata<Formdata, E>(
//     service: IHttpService,
//     req: any
//   ): Observable<Object> {
//     let token = this.authStorage.getItem('access_token') ?? '';
//     let XSRF_token = this.getCookie('XSRF-TOKEN') ?? '';
//     const headers = new HttpHeaders({
//       // 'Content-Type': service.getContentType(),
//       Authorization: 'Bearer ' + token,
//       RequestVerificationToken: XSRF_token,
//     });
//     const options = {
//       headers: headers,
//     };
//     if (!service.getContentType().includes('multipart/form-data')) {
//       return of('ContentType 錯誤');
//     }
//     return this.https.post(service.url, req, options);
//
//     // return EMPTY;
//   }
//
//   requestFormdataLaw<Formdata, E>(
//     service: IHttpService,
//     req: any
//   ): Observable<Object> {
//     let token = this.authStorage.getItem('access_token') ?? '';
//     let XSRF_token = this.getCookie('XSRF-TOKEN') ?? '';
//     const headers = new HttpHeaders({
//       // 'Content-Type': service.getContentType(),
//       Authorization: 'Bearer ' + token,
//       RequestVerificationToken: XSRF_token,
//     });
//     const options = {
//       headers: headers,
//     };
//     if (!service.getContentType().includes('multipart/form-data')) {
//       return of('ContentType 錯誤');
//     }
//     return this.https.put(service.url, req, options);
//
//     // return EMPTY;
//   }
//
//   getCookie(key: string): string | null {
//     return (
//       decodeURIComponent(
//         document.cookie.replace(
//           new RegExp(
//             '(?:(?:^|.*;)\\s*' +
//               encodeURIComponent(key).replace(/[\-\.\+\*]/g, '\\$&') +
//               '\\s*\\=\\s*([^;]*).*$)|^.*$'
//           ),
//           '$1'
//         )
//       ) || null
//     );
//   }
// }
