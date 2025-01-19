import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAmazoneComponent } from './detail-amazone.component';

describe('DetailAmazoneComponent', () => {
  let component: DetailAmazoneComponent;
  let fixture: ComponentFixture<DetailAmazoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailAmazoneComponent]
    });
    fixture = TestBed.createComponent(DetailAmazoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
