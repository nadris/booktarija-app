import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detalle-libro',
  templateUrl: './detalle-libro.page.html',
  styleUrls: ['./detalle-libro.page.scss'],
})
export class DetalleLibroPage implements OnInit {
  id: string;
  itemRef: AngularFireObject<any>;
  item: Observable<any>;
  libro: any ={};

  constructor(private activatedRoute:ActivatedRoute,public db: AngularFireDatabase) { 
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.itemRef = db.object('libros/'+ this.id);
    this.itemRef.snapshotChanges().subscribe(action => {
      // console.log(action.key)
      // console.log(action.payload.val())
      const $key = action.key;
      this.libro = {$key, ...action.payload.val()}
      console.log(this.libro);
});
  }

  ngOnInit() {
  }

}
