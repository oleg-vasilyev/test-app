import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { IUser } from 'src/app/shared/models/user';
import { BackendService } from 'src/app/shared/backend/backend.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _LOGIN_URL = 'login';

  constructor(private _backend: BackendService) { }

  public login(user: IUser): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const userJSON = JSON.stringify(user);

    return this._backend.post(this._LOGIN_URL, userJSON, httpOptions).toPromise();
  }

  public register(user: IUser): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const userJSON = JSON.stringify(user);

    return this._backend.post(this._LOGIN_URL, userJSON, httpOptions).toPromise();
  }
}
