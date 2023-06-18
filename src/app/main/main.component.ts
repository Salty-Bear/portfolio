import { Component,Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../service/login.service';




@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {


  isMobile = false;
  isSidebarVisible = false;
  constructor(public log:LoginService,public _snackBar: MatSnackBar,public dialog: MatDialog) { }

  ngOnInit() {
    this.checkScreenWidth();
    window.addEventListener('resize', this.checkScreenWidth.bind(this));
  }

  checkScreenWidth() {
    this.isMobile = window.innerWidth <= 768;
    if(this.isMobile) this.isSidebarVisible=true;
  }

 
  
  openSnackBar(message: string, action: string) {
    this._snackBar.open("Signed in Successfully");
  }

  openDialog(){
    this.dialog.open(LoginComponent,{
      // width:'20%',
      // height:'40%',
    });
  }


}