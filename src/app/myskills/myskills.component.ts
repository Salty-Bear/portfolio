import { Component } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-myskills',
  templateUrl: './myskills.component.html',
  styleUrls: ['./myskills.component.css']
})
export class MyskillsComponent {
  ngOnInit(){
    Aos.init();
  }

}
