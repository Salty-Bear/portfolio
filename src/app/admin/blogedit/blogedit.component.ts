import { Component } from '@angular/core';
import { ItemserviceService } from 'src/app/service/itemservice.service';
import { Item } from 'src/app/model/item';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-blogedit',
  templateUrl: './blogedit.component.html',
  styleUrls: ['./blogedit.component.css']
})
export class BlogeditComponent {
  item: Item = {
    title:'',
    brief:'',
    description:'',
    time:0
  }
  
  blogs: Item[];
  constructor(public itemservice:ItemserviceService,private _snackBar: MatSnackBar){
    this.blogs = [];
  }
 

  ngOnInit(){
    console.log(this.blogs);
    this.itemservice.getblog().subscribe( (data) =>{
      this.blogs=data;
      console.log(this.blogs);
    });
  }


  add(){
    const current = new Date();
    const timestamp = current.getTime();
    this.item.time=timestamp;
    this.itemservice.addblog(this.item);
    this.openSnackBar("Blog Added Sucessfully","Close")
    this.item.title="";
    this.item.brief="";
    this.item.description="";
    
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}