import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private _http: HttpClient) { }

  public post<T>(url: string, payload: any, options: any): Observable<HttpEvent<T>> {
    return this._http.post<T>(url, payload, options);
  }
}
