import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError} from 'rxjs/operators';
import { throwError } from 'rxjs'
import { BehaviorSubject,Observable } from 'rxjs';

interface LoginResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}



@Injectable({
  providedIn: 'root'
})




export class LoginService {
  public _isAuthenticatedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isAuthenticatedObs: Observable<boolean> = this._isAuthenticatedSubject.asObservable();


  isLoggedIn=false;
  constructor(public http:HttpClient) { }

  login(email : string,password : string){
      return this.http.post<LoginResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDqQpH_pWYL1DM9LLOGNQOBUfvwW-H1wwE',
      { email:email,
        password:password,
        returnSecureToken:true
      })
      .pipe(
        catchError(
          (errorRes) =>{
            console.log(errorRes)
            return throwError(() => errorRes)
          }
          
        )
      )

  }
}
