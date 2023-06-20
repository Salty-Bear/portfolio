import { Injectable ,OnInit} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Item } from '../model/item';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ItemserviceService {
  itemsCollection?: AngularFirestoreCollection<Item>;
  items:Observable<Item[]> ;

  constructor(public afs:AngularFirestore) {
    this.items=this.afs.collection<Item>('blog').valueChanges();
  }

  getblog(){
    return this.items;
  }

  addblog(item:Item){
    this.afs.collection('blog').add({item});
  }

}
