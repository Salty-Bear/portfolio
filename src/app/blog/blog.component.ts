import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import * as Aos from 'aos';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],

})
export class BlogComponent {
  
  ngOnInit(){
    Aos.init();
  }
}
