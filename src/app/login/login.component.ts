import {Component,Inject} from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoginService } from '../service/login.service';
import { MainComponent } from '../main/main.component';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoggedIn=false;
  constructor(private log:MainComponent ,private loginservice:LoginService, public dialogRef: MatDialogRef<LoginComponent>,@Inject(MAT_DIALOG_DATA) public data:any,private _snackBar: MatSnackBar){}
  hide = true;
  email:any;
  message="You have successfully signed in!"
  password:any;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  openSnackBar() {
    this.login();
    this.dialogRef.close();

    //-----------------LOGIN -----------------------

    // this.auth.login(this.email,this.password);
    this.email='';
    this.password='';

  }


  login(){
    this.loginservice.login(this.email,this.password).subscribe(
      resData =>{
        this.message="You have successfully signed in!";
        this._snackBar.open(this.message, this.action); 
        this.loginservice._isAuthenticatedSubject.next(true);
        localStorage.setItem('token',"p&p4n}')`A9R~SNSjHgcY8#h(xn5+!7hoo(TOY][Nt_4)X7@uJwy(y-`:*Z0KW#")
      }
    ,
    errorMessage =>{
      this.message="Invalid Credentials"
      this._snackBar.open(this.message, this.action);
    }
    )
  }
  
  action="Close!"
  }
