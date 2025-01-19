import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSouscriptionComponent } from './details-souscription.component';

describe('DetailsSouscriptionComponent', () => {
  let component: DetailsSouscriptionComponent;
  let fixture: ComponentFixture<DetailsSouscriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsSouscriptionComponent]
    });
    fixture = TestBed.createComponent(DetailsSouscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
