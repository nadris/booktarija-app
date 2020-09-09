import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';



@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  itemsRef: AngularFireList<any>;
  libros: Observable<any[]>;

  itemRefPubli: AngularFireObject<any>;
  publicidad: any={};
  constructor(db: AngularFireDatabase,private router:Router) {
    this.itemsRef = db.list('libros');
    // Use snapshotChanges().map() to store the key
    this.libros = this.itemsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

    this.itemRefPubli = db.object('publicidad/1');
    this.itemRefPubli.snapshotChanges().subscribe(action => {
        const $key = action.key;
        this.publicidad={$key,...action.payload.val()}
        console.log(this.publicidad);
    });


  }

  ngOnInit() {
  }
  irpantalladetalle(key){
    this.router.navigate(['/detalle-libro',{id:key}])
  } 
}
