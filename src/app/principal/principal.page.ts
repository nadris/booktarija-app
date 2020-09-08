import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";


@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  itemsRef: AngularFireList<any>;
  libros: Observable<any[]>;


  constructor(db: AngularFireDatabase,private router: Router) {
    this.itemsRef = db.list('libros');
    // Use snapshotChanges().map() to store the key
    this.libros = this.itemsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  ngOnInit() {
  }
  irdetallelibro(key){
    this.router.navigate(['/detalle-libro', { id: key }]);
  }
}
