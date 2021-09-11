import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddonsTableComponent } from './addons-table.component';

describe('AddonsComponent', () => {
  let component: AddonsTableComponent;
  let fixture: ComponentFixture<AddonsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddonsTableComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddonsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
