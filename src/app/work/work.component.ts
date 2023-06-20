import { Component,OnInit  } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {

  ngOnInit(){
    Aos.init();
  }


}
