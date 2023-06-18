import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth:AngularFireAuth,private Router:Router,private userservice:LoginService) { }


  login(email : string,password:string){
    this.fireauth.signInWithEmailAndPassword(email,password).then(() => {
    }, err=>{
      console.log("Something Went wrong");
    })
  }
}
