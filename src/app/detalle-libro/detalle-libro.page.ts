import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-detalle-libro',
  templateUrl: './detalle-libro.page.html',
  styleUrls: ['./detalle-libro.page.scss'],
})
export class DetalleLibroPage implements OnInit {
  id:string;
  itemRef: AngularFireObject<any>;
  item: Observable<any>;
  product :any = {};
  constructor(private activatedRoute: ActivatedRoute,public db: AngularFireDatabase) {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.id);
    this.itemRef = db.object('libros/' + this.id);
    this.itemRef.snapshotChanges().subscribe(action => {
      const $key=action.key;
      this.product={$key,...action.payload.val()};
      console.log(this.product)
    });

    
    // console.log(this.itemRef)
    // this.itemRef.snapshotChanges().pipe(map(changes => {
    //   return changes.payload.val()})).subscribe(p => this.product = p);
    //   console.log(this.product)
  }
  ngOnInit(){
    
  }
}