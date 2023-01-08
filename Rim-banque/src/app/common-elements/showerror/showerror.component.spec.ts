import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowerrorComponent } from './showerror.component';

describe('ShowerrorComponent', () => {
  let component: ShowerrorComponent;
  let fixture: ComponentFixture<ShowerrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowerrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowerrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
