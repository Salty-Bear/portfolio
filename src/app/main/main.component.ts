import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  
  isMobile = false;
  isSidebarVisible = false;
  constructor(private _snackBar: MatSnackBar) { }

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

}