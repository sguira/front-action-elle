import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssureeComponent } from './assuree.component';

describe('AssureeComponent', () => {
  let component: AssureeComponent;
  let fixture: ComponentFixture<AssureeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssureeComponent]
    });
    fixture = TestBed.createComponent(AssureeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
