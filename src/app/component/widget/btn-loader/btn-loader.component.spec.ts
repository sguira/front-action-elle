import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnLoaderComponent } from './btn-loader.component';

describe('BtnLoaderComponent', () => {
  let component: BtnLoaderComponent;
  let fixture: ComponentFixture<BtnLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnLoaderComponent]
    });
    fixture = TestBed.createComponent(BtnLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
