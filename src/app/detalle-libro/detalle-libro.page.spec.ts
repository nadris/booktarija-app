import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalleLibroPage } from './detalle-libro.page';

describe('DetalleLibroPage', () => {
  let component: DetalleLibroPage;
  let fixture: ComponentFixture<DetalleLibroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleLibroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleLibroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
