import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSouscriptionsComponent } from './item-souscriptions.component';

describe('ItemSouscriptionsComponent', () => {
  let component: ItemSouscriptionsComponent;
  let fixture: ComponentFixture<ItemSouscriptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemSouscriptionsComponent]
    });
    fixture = TestBed.createComponent(ItemSouscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
