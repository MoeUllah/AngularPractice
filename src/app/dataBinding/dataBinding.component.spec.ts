import { ComponentFixture, TestBed } from '@angular/core/testing';

import { dataBindingComponent } from './dataBinding.component';

describe('dataBindingComponent', () => {
  let component: dataBindingComponent;
  let fixture: ComponentFixture<dataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ dataBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(dataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
