import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSuscriptionComponent } from './list-suscription.component';

describe('ListSuscriptionComponent', () => {
  let component: ListSuscriptionComponent;
  let fixture: ComponentFixture<ListSuscriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSuscriptionComponent]
    });
    fixture = TestBed.createComponent(ListSuscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
