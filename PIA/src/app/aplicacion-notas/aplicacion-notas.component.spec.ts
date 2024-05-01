import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AplicacionNotasComponent } from './aplicacion-notas.component';
import { AgregarnotasComponent } from '../agregarnotas/agregarnotas.component';

describe('AplicacionNotasComponent', () => {
  let component: AplicacionNotasComponent;
  let fixture: ComponentFixture<AplicacionNotasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AplicacionNotasComponent, AgregarnotasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AplicacionNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
