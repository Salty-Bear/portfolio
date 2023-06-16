import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  
  isMobile = false;
  isSidebarVisible = false;
  constructor() { }

  ngOnInit() {
    this.checkScreenWidth();
    window.addEventListener('resize', this.checkScreenWidth.bind(this));
  }

  checkScreenWidth() {
    this.isMobile = window.innerWidth <= 768;
    if(this.isMobile) this.isSidebarVisible=true;
  }
}