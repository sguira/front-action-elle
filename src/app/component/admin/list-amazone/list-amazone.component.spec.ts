import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAmazoneComponent } from './list-amazone.component';

describe('ListAmazoneComponent', () => {
  let component: ListAmazoneComponent;
  let fixture: ComponentFixture<ListAmazoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAmazoneComponent]
    });
    fixture = TestBed.createComponent(ListAmazoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
