import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscripteursComponent } from './suscripteurs.component';

describe('SuscripteursComponent', () => {
  let component: SuscripteursComponent;
  let fixture: ComponentFixture<SuscripteursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuscripteursComponent]
    });
    fixture = TestBed.createComponent(SuscripteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
