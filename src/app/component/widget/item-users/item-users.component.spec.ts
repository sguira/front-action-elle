import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemUsersComponent } from './item-users.component';

describe('ItemUsersComponent', () => {
  let component: ItemUsersComponent;
  let fixture: ComponentFixture<ItemUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemUsersComponent]
    });
    fixture = TestBed.createComponent(ItemUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
